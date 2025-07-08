import type { PostType } from "../postTypes";

/** postType 분기 타입 */
export type PostTypeParams<T extends PostType = PostType> = {
  postType: T;
};

/** postType와 postId 분기 타입 */
export type PostTargetParams<T extends PostType = PostType> = PostTypeParams<T> & { postId: string };

/** postType와 parentId 분기 타입 */
export type ParentTargetParams<T extends PostType = PostType> = PostTypeParams<T> & { parentId: number };