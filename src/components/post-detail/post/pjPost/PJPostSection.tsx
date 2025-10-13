"use client";

import PostSection from "../PostSection";
import PJPostLabel from "./PJPostLabel";
import { useGetPostDetailQuery } from "@/hooks/tanstack/queries/useGetPosts";

interface PostSectionProps {
  postId: string;
}

const PJPostSection = ({ postId }: PostSectionProps) => {
  const { data: postData, isPending, isError, error } = useGetPostDetailQuery({ postType: "PJ", postId });

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>게시물을 불러오고 있습니다.</div>;

  if (isError) throw new Error(error.message);

  return (
    <PostSection postData={postData}>
      {postData.fileUrls.length > 0 && (
        <section className="-mx-16 flex items-center gap-4 overflow-x-scroll px-16 py-18">
          {postData.fileUrls.map(({ id, imageUrl }) => (
            <img
              key={`pj_post_${postData.id}_image_${id}`}
              className="h-160 w-160 rounded-full"
              src={imageUrl}
              alt="profile image"
            />
          ))}
        </section>
      )}

      <section className="py-10">
        <PJPostLabel post={postData} />
      </section>

      <hr className="-mx-16 mt-18 border-black-200" />
      <p className="body-14-r py-18 text-black-1000">{postData.content}</p>
    </PostSection>
  );
};

export default PJPostSection;
