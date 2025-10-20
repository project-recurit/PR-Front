"use client";

import ProfileContentItem from "./ProfileContentItem";

const ProfileFavoriteTab = () => {
  const favoriteContentList = [1, 2, 3];
  return (
    <ol>
      {favoriteContentList.map((item) => (
        <ProfileContentItem key={`profile_favorite_content_${item}`} />
      ))}
    </ol>
  );
};

export default ProfileFavoriteTab;
