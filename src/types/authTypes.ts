import type { ApiResponse } from './apiTypes';
import type { signUpSchema } from '@/schemas/authSchema';
import type { Account, User } from 'next-auth';
import type { AdapterUser } from 'next-auth/adapters';
import type { z } from 'zod';

export type SignupForm = z.infer<typeof signUpSchema>;

export type SocialLogInApiParams = { user: User | AdapterUser; account: Account };

export type SocialLogInResponse = ApiResponse<{
  status: 'LOGIN_SUCCESS' | 'USER_INFO_UPDATE';
  data: {
    id: string;
    accessToken: string;
    refreshToken: string;
    isSignUpSuccess: boolean;
  };
}>;
