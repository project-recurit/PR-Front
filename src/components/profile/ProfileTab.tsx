"use client";

import ProfileFavoriteTab from "./ProfileFavoriteTab";
import ProfilePJTab from "./ProfilePJTab";
import ProfilePRTab from "./ProfilePRTab";
import clsx from "clsx";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TAB_LIST = [
  { type: "pj", label: "PJ" },
  { type: "pr", label: "PR" },
  { type: "favorite", label: "관심" },
];
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
            key={`profile_tab_bar_${tab.type}`}
            className={"pt-16 text-center focus:outline-none"}
          >
            <div className="body-14-s text-center text-black-1000">{tab.label}</div>
            <div className="caption-12-r text-center text-black-600">갯수</div>
            <div className={clsx("mt-8 h-3", { "bg-orange": index === focusedTabIndex })} />
          </Tab>
        ))}
      </TabList>

      <TabPanel>
        <ProfilePJTab />
      </TabPanel>
      <TabPanel>
        <ProfilePRTab />
      </TabPanel>
      <TabPanel>
        <ProfileFavoriteTab />
      </TabPanel>
    </Tabs>
  );
};

export default ProfileTab;
