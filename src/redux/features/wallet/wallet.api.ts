import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myWallet: builder.query({
      query: () => ({
        url: "/wallet",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    withdrawMoney: builder.mutation({
      query: (data) => ({
        url: "wallet/agent/cashOut",
        method: "POST",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    cashIn: builder.mutation({
      query: (data) => ({
        url: "/wallet/agent/cashIn",
        method: "POST",
        data,
      }),
    }),
    cashOut: builder.mutation({
      query: (data) => ({
        url: "/wallet/agent/cashOut",
        method: "POST",
        data,
      }),
    }),
    transfer: builder.mutation({
      query: (data) => ({
        url: "/wallet/transfer",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useMyWalletQuery,
  useWithdrawMoneyMutation,
  useCashInMutation,
  useCashOutMutation,
  useTransferMutation,
} = walletApi;
