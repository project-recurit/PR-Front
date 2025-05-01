const queryKeys = {
  posts: {
    PJ: ["project"],
    PR: ["publicRelation"],
  },
  postDetail: {
    PJ: (postId: string) => ["project", postId],
    PR: (postId: string) => ["publicRelation", postId],
  },
  comments: {
    root: (postId: string) => ["comments", postId],
    reply: (parentId: string) => ["reply", parentId],
  },
} as const;

export default queryKeys;
