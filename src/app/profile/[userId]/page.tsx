import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTab from "@/components/profile/ProfileTab";
import { use } from "react";

interface ProfilePageProps {
  params: Promise<{ userId: string }>;
}

const ProfilePage = ({ params }: ProfilePageProps) => {
  const { userId } = use(params);

  return (
    <main className="mb-68">
      <ProfileHeader />
      <hr />
      <ProfileTab />
    </main>
  );
};

export default ProfilePage;
