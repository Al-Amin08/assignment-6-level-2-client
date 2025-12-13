import { baseApi } from "@/redux/baseApi";

const authAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/ user / register",
        method: "POST",
        data: userInfo,
      }),
    }),
  }),
});
export const { useRegisterMutation } = authAPi;
