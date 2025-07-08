const COMMENT_QUERY_KEYS = {
  PJ: (postId: string) => ["PJcomments", postId],
  PR: (postId: string) => ["PRcomments", postId],
  reply: {
    PJ: (parentId: number) => ["PJreplyComments", parentId],
    PR: (parentId: number) => ["PRreplyComments", parentId],
  },
} as const;

export default COMMENT_QUERY_KEYS;
