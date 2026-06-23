import { useState } from "react";

import DashboardLayout from "../Layouts/DashboardLayout";

import { useGetFeedbacksQuery } from "../features/feedback/feedbackApi";
import { useGetCategoriesQuery } from "../features/category/categoryApi";

export default function FeedbackManagementPage() {
  const [page, setPage] = useState(1);

  const [search, setSearch] =
    useState("");

  const [categoryId, setCategoryId] =
    useState("");

  const {
    data,
    isLoading,
  } = useGetFeedbacksQuery({
    page,
    limit: 10,
    search,
    categoryId,
  });

  const {
    data: categoryResponse,
  } = useGetCategoriesQuery();

  const categories =
    categoryResponse?.data || [];

  const feedbacks =
    data?.data?.rows || [];

  const totalPages =
    data?.pagination?.totalPages || 1;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}

        {/* Filters */}

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by name, email or comment..."
              value={search}
              onChange={(e) => {
                setSearch(
                  e.target.value
                );
                setPage(1);
              }}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500 outline-none"
            />

            <select
              value={categoryId}
              onChange={(e) => {
                setCategoryId(
                  e.target.value
                );
                setPage(1);
              }}
              className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500 outline-none"
            >
              <option value="">
                All Categories
              </option>

              {categories.map(
                (category: any) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Table */}

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="text-center py-20 text-slate-500">
              Loading feedback...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      Category
                    </th>

                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      Name
                    </th>

                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      Comment
                    </th>

                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {feedbacks.length > 0 ? (
                    feedbacks.map(
                      (item: any) => (
                        <tr
                          key={item.id}
                          className="border-t hover:bg-violet-50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
                              {
                                item
                                  .category
                                  ?.name
                              }
                            </span>
                          </td>

                          <td className="px-6 py-4 font-medium text-slate-800">
                            {item.name}
                          </td>

                          <td className="px-6 py-4 text-slate-700">
                            {item.email}
                          </td>

                          <td className="px-6 py-4 text-slate-600 max-w-md">
                            {item.comment}
                          </td>

                          <td className="px-6 py-4 text-slate-500">
                            {new Date(
                              item.createdAt
                            ).toLocaleDateString()}
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center py-16 text-slate-500"
                      >
                        No feedback found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}

        <div className="bg-white rounded-2xl border shadow-sm p-5 flex justify-between items-center">
          <p className="text-sm text-slate-500">
            Page {page} of{" "}
            {totalPages}
          </p>

          <div className="flex gap-3">
            <button
              disabled={page === 1}
              onClick={() =>
                setPage(
                  page - 1
                )
              }
              className="px-5 py-2 rounded-xl border hover:bg-slate-50 disabled:opacity-40"
            >
              Previous
            </button>

            <button
              disabled={
                page === totalPages
              }
              onClick={() =>
                setPage(
                  page + 1
                )
              }
              className="px-5 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}