"use client";

import DashboardApplicationTab from "./DashboardApplicationTab";
import DashboardProjectTab from "./DashboardProjectTab";
import clsx from "clsx";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TAB_LIST = [
  { key: "project", label: "프로젝트" },
  { key: "application", label: "지원현황" },
  { key: "recruitment", label: "모집현황" },
];

const TAB_COMPONENTS: Record<(typeof TAB_LIST)[number]["key"], React.FC> = {
  project: DashboardProjectTab,
  application: DashboardApplicationTab,
  recruitment: DashboardApplicationTab,
};

const Dashboard = () => {
  const [focusedTabIndex, setFocusedTabIndex] = useState(0);

  return (
    <Tabs
      selectedIndex={focusedTabIndex}
      onSelect={(index) => setFocusedTabIndex(index)}
      className={"h-full"}
    >
      <TabList
        className={"flex h-40 items-end gap-14 border-b-1 border-black-200 px-16 shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]"}
      >
        {TAB_LIST.map((tab, index) => (
          <Tab
            key={`dashboard_tab_bar_${tab.key}`}
            className={"relative px-4 pt-4 text-center focus:outline-none"}
          >
            <div
              className={clsx(
                "body-14-s text-center transition-all duration-200",
                index === focusedTabIndex ? "text-black-800" : "text-black-500",
              )}
            >
              {tab.label}
            </div>
            <div
              className={clsx("relative top-2 h-3 rounded-2 transition-all duration-200", {
                "bg-black-800": index === focusedTabIndex,
              })}
            />
          </Tab>
        ))}
      </TabList>

      {TAB_LIST.map((tab) => {
        const Component = TAB_COMPONENTS[tab.key];
        return (
          <TabPanel
            key={`dashboard_tab_${tab.key}`}
            className={"h-full"}
          >
            <section className="h-full bg-background">
              <Component />
            </section>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default Dashboard;
