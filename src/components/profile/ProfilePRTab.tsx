"use client";

import ProfileContentItem from "./ProfileContentItem";

const ProfilePRTab = () => {
  const prContentList = [1, 2, 3];
  return (
    <ol>
      {prContentList.map((item) => (
        <ProfileContentItem key={`profile_pr_content_${item}`} />
      ))}
    </ol>
  );
};

export default ProfilePRTab;
