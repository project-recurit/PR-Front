const queryKeys = {
  posts: {
    PJ: () => ["project"],
    PR: () => ["publicRelation"],
  },
  postDetail: {
    PJ: (postId: string) => ["project", postId],
    PR: (postId: string) => ["publicRelation", postId],
  },
} as const;

export default queryKeys;
