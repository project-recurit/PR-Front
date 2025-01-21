import { apiClient } from "@/lib/apiClient";
import { PJres, PRres } from "@/type/type";

export const fetchAllPosts = async () => {
  try {
    const PJreq = await apiClient.get<PJres>("/api/v1/team-recruit");
    const PRreq = await apiClient.get<PRres>("/api/v1/pr");
    const [PJres, PRres] = await Promise.all([PJreq, PRreq]);
    const reponse = [
      ...PJres.data.data.teamRecruits,
      ...PRres.data.data.content,
    ];
    return reponse;
  } catch (error) {
    console.error(error);
    return;
  }
};
