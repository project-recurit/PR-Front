export const getTechStackColor = (id: number) => {
  const colors = [
    "#F5D6D6",
    "#F5E5D6",
    "#F5F5D6",
    "#E5F5D6",
    "#D6F5D6",
    "#D6F5E5",
    "#D6F5F5",
    "#D6E5F5",
    "#D6D6F5",
    "#E5D6F5",
    "#F5D6F5",
    "#F5D6E5",
  ];
  const index = id % colors.length;
  return colors[index];
};
