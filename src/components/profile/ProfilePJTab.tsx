"use client";

import ProfileContentItem from "./ProfileContentItem";

const ProfilePJTab = () => {
  const pjContentList = [1, 2, 3];
  return (
    <ol>
      {pjContentList.map((item) => (
        <ProfileContentItem key={`profile_pj_content_${item}`} />
      ))}
    </ol>
  );
};

export default ProfilePJTab;
