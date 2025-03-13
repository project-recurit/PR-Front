const queryKeys = {
  post: {
    project: () => ["project"],
    publicRelation: () => ["publicRelation"],
  },
} as const;

export default queryKeys;
