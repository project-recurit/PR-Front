export interface PJres {
  status: string;
  message: string;
  data: {
    teamRecruits: PJpost[];
    currentPage: number;
    totalPages: number;
    totalElements: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export interface PJpost {
  id: number;
  title: string;
  content: string;
  techStack1s: string[];
  expectedPeriod: string;
  fileUrl: string;
  contact: string;
}

export interface PRpost {
  id: number;
  title: string;
  username: string;
  techStacks: string[];
}

export interface PRres {
  status: string;
  message: string;
  data: {
    content: PRpost[];
    page: {
      size: number;
      number: number;
      totalElements: number;
      totalPages: number;
    };
  };
}
