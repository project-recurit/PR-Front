export const fetchTechStacks = async () => {
  try {
    const BASE_URL = process.env.API_BASE_URL;
    const res = await fetch(`${BASE_URL}/api/v1/tech-stack`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
