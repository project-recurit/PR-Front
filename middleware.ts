import ROUTES from "@/constants/routes";
import { withAuth, type NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  (request: NextRequestWithAuth) => {
    console.log(" request => ", request);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(" token => ", token);
        return !!token;
      },
    },
    pages: {
      signIn: ROUTES.logIn,
    },
  },
);

export const config = {
  matcher: ["/chat", "/dashboard"],
};
