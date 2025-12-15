import { baseApi } from "@/redux/baseApi";

const authAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),

    userInfo: builder.query({
      query: () => ({
        url: "/user/myProfile",
        method: "GET",
      }),
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation, useUserInfoQuery } =
  authAPi;
