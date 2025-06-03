const POST_QUERY_KEYS = {
  PJ: ["project"],
  PR: ["publicRelation"],
  detail: {
    PJ: (postId: string) => ["project", postId],
    PR: (postId: string) => ["publicRelation", postId],
  },
} as const;

export default POST_QUERY_KEYS;
