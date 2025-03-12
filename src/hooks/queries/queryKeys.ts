const queryKeys = {
  post: {
    project: () => ["project"],
    profile: () => ["profile"],
  },
} as const;

export default queryKeys;
