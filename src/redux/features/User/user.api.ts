import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query({
      query: () => ({
        url: "/user/myProfile",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/user/updateMyProfile",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    allUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
  }),
});

export const { useUserInfoQuery, useUpdateProfileMutation, useAllUserQuery } =
  userApi;
