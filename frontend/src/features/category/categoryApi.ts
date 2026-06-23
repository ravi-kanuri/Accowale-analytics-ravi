import { baseApi } from "../../services/baseApi";

export const categoryApi =
  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getCategories:
        builder.query<any, void>({
          query: () =>
            "/categories",

          providesTags: [
            "Category",
          ],
        }),
    }),
  });

export const {
  useGetCategoriesQuery,
} = categoryApi;