"use client";

import ProfileFavoriteTab from "./ProfileFavoriteTab";
import ProfilePJTab from "./ProfilePJTab";
import ProfilePRTab from "./ProfilePRTab";
import clsx from "clsx";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TAB_LIST = [
  { key: "pj", label: "PJ" },
  { key: "pr", label: "PR" },
  { key: "favorite", label: "관심" },
];

const TAB_COMPONENTS: Record<(typeof TAB_LIST)[number]["key"], React.FC> = {
  pj: ProfilePJTab,
  pr: ProfilePRTab,
  favorite: ProfileFavoriteTab,
};

const ProfileTab = () => {
  const [focusedTabIndex, setFocusedTabIndex] = useState(0);

  return (
    <Tabs
      selectedIndex={focusedTabIndex}
      onSelect={(index) => setFocusedTabIndex(index)}
    >
      <TabList className={"grid grid-cols-3 border-b-1 border-black-200 shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]"}>
        {TAB_LIST.map((tab, index) => (
          <Tab
            key={`profile_tab_bar_${tab.key}`}
            className={"pt-16 text-center focus:outline-none"}
          >
            <div className="body-14-s text-center text-black-1000">{tab.label}</div>
            <div className="caption-12-r text-center text-black-600">갯수</div>
            <div className={clsx("mt-8 h-3 transition-all duration-200", { "bg-orange": index === focusedTabIndex })} />
          </Tab>
        ))}
      </TabList>

      {TAB_LIST.map((tab) => {
        const Component = TAB_COMPONENTS[tab.key];
        return (
          <TabPanel key={`profile_tab_${tab.key}`}>
            <Component />
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default ProfileTab;
