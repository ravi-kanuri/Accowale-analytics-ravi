import { baseApi } from "../../services/baseApi";

export const feedbackApi =
  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      submitFeedback:
        builder.mutation({
          query: (body) => ({
            url: "/feedback",
            method: "POST",
            body,
          }),

          invalidatesTags: [
            "Feedback",
          ],
        }),

      getFeedbacks: builder.query({
  query: ({
    page = 1,
    limit = 10,
    search = "",
    categoryId = "",
  }) =>
    `/feedback?page=${page}&limit=${limit}&search=${search}&categoryId=${categoryId}`,

  providesTags: ["Feedback"],
}),
    }),
  });

export const {
  useSubmitFeedbackMutation,
  useGetFeedbacksQuery,
} = feedbackApi;