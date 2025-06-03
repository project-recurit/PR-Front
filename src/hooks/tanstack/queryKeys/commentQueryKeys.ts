const COMMENT_QUERY_KEYS = {
  PJ: (postId: string) => ["PJcomments", postId],
  PR: (postId: string) => ["PRcomments", postId],
  reply: {
    PJ: (parentId: string) => ["PJreply", parentId],
    PR: (parentId: string) => ["PRreply", parentId],
  },
} as const;

export default COMMENT_QUERY_KEYS;
