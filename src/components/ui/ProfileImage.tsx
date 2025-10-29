"use client";

interface ProfileImageProps {
  src: string;
  size?: "sm" | "md";
  disabledNavigate?: boolean;
}

const sizeMap = {
  sm: "w-40 h-40",
  md: "w-56 h-56",
};

const ProfileImage = ({ src, size = "sm", disabledNavigate = false }: ProfileImageProps) => {
  const onClick = () => {
    if (disabledNavigate) {
      return;
    }
  };
  return (
    <img
      src={src}
      alt="profile image"
      onClick={onClick}
      className={`${sizeMap[size]} rounded-full object-cover`}
    />
  );
};

export default ProfileImage;
