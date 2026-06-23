import DashboardLayout from "../Layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import FeedbackTable from "../components/FeedbackTable";
import CategoryChart from "../components/CategoryChart";

import { useGetAnalyticsQuery } from "../features/analytics/analyticsApi";

export default function DashboardPage() {
  const {
    data,
    isLoading,
  } = useGetAnalyticsQuery();

  const analytics = data?.data;

  const chartData =
    analytics?.categoryDistribution?.map(
      (item: any) => ({
        name: item.category.name,
        value: Number(item.count),
      })
    ) || [];

  if (isLoading) {
    return <DashboardLayout>Loading...</DashboardLayout>;
  }

  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard
          title="Total Feedback"
          value={
            analytics?.totalFeedback || 0
          }
        />

        <StatCard
          title="Categories"
          value={
            analytics?.categoryDistribution?.length || 0
          }
        />

        <StatCard
          title="Recent Feedback"
          value={
            analytics?.recentFeedback?.length || 0
          }
        />

        <StatCard
          title="Products"
          value={
            chartData.find(
              (item:any) =>
                item.name === "Product"
            )?.value || 0
          }
        />
      </div>

      <div className="mt-6">
        <CategoryChart
          data={chartData}
        />
      </div>

      <div className="mt-6">
        <FeedbackTable
          feedbacks={
            analytics?.recentFeedback || []
          }
        />
      </div>
    </DashboardLayout>
  );
}