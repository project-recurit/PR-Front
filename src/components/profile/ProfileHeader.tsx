import ProfileImage from "../ui/ProfileImage";
import TechStackLabel from "../ui/StackLabel";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col gap-16 px-16 pb-16 pt-12">
      <section className="flex items-center gap-12">
        <ProfileImage
          src={"https://cdn.dailycc.net/news/photo/202412/817953_728829_350.jpg"}
          size={"md"}
        />
        <div>
          <p className="body-16-m text-black-1000">사용자 닉네임</p>
          <p className="body-14-r mt-8 text-black-600">example@email.com</p>
        </div>
        {/* TODO: 남 -> 채팅, 본인 -> 프로필 편집 */}
      </section>

      <p className="body-16-r text-black-1000">한줄소개 어쩌고 저쩌고</p>

      <section>
        <TechStackLabel
          stacks={[
            { id: 1, name: "C" },
            { id: 6, name: "TypeScript" },
            { id: 8, name: "Ruby" },
          ]}
          showTitle={false}
          visibleCount={4}
        />
      </section>

      <Link
        href={ROUTES.myResume}
        className="flex h-40 w-full items-center justify-center rounded-8 border-1 border-black-400 bg-black-50"
      >
        <span className="body-14-s text-black-1000">내 이력</span>
      </Link>
    </div>
  );
};

export default ProfileHeader;
