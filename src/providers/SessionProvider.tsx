"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthSessionProps {
  session?: Session | null;
  children: ReactNode;
}

const AuthSession = ({ session, children }: AuthSessionProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthSession;
