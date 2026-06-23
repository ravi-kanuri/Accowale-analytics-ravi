import { baseApi } from "../../services/baseApi";

export const analyticsApi =
  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getAnalytics:
        builder.query<any, void>({
          query: () =>
            "/analytics",

          providesTags: [
            "Analytics",
          ],
        }),
    }),
  });

export const {
  useGetAnalyticsQuery,
} = analyticsApi;