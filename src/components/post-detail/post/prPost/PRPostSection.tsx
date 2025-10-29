"use client";

import PostSection from "../PostSection";
import PRPostExperienceCard from "./PRPostExperienceCard";
import PRPostLabel from "./PRPostLabel";
import { useGetPostDetailQuery } from "@/hooks/tanstack/queries/useGetPosts";

interface PostSectionProps {
  postId: string;
}

const PRPostSection = ({ postId }: PostSectionProps) => {
  const { data: postData, isPending, isError, error } = useGetPostDetailQuery({ postType: "PR", postId });

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>게시물을 불러오고 있습니다.</div>;

  if (isError) throw new Error(error.message);

  return (
    <PostSection postData={postData}>
      <section className="py-18">
        <PRPostLabel post={postData} />
      </section>

      <hr className="-mx-16 border-black-200" />
      <p className="body-14-r py-18 text-black-1000">{postData.introduce}</p>

      <div className="mb-18 flex flex-col gap-18">
        {postData.experiences.map((experience) => (
          <PRPostExperienceCard
            key={`pr_post_experience_${experience.id}`}
            experience={experience}
          />
        ))}
      </div>
    </PostSection>
  );
};

export default PRPostSection;
