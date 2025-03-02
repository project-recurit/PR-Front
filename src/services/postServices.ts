import { apiClient } from "@/lib/apiClient";
import { PJres, PRres } from "@/types/type";

export const fetchAllPosts = async () => {
  try {
    const response = undefined;
    // const PJreq = await apiClient.get<PJres>("/api/v1/team-recruit");
    // // const PRreq = await apiClient.get<PRres>("/api/v1/pr");
    // // const [PJres, PRres] = await Promise.all([PJreq, PRreq]);
    // const response = PJreq.data.data.teamRecruits;
    // //   [
    //   ...PJres.data.data.teamRecruits,
    //   ...PRres.data.data.content,
    // ];
    return response;
  } catch (error) {
    console.error(error);
    return;
  }
};
