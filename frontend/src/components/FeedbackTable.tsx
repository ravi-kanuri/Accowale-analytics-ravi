interface Feedback {
  id: string;
  email: string;
  name: string;
  comment: string;
  createdAt: string;

  category: {
    id: string;
    name: string;
  };
}

interface Props {
  feedbacks: Feedback[];
}

export default function FeedbackTable({
  feedbacks = [],
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="font-semibold text-lg">
          Recent Feedback
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left p-4">
                Category
              </th>

              <th className="text-left p-4">
                Email
              </th>

               <th className="text-left p-4">
                Name
              </th>

              <th className="text-left p-4">
                Feedback
              </th>

              <th className="text-left p-4">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {feedbacks.length > 0 ? (
              feedbacks.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4">
                    {item.category?.name}
                  </td>

                  <td className="p-4">
                    {item.email}
                  </td>


                   <th className="text-left p-4">
                  {item.name}
                  </th>

                  <td className="p-4">
                    {item.comment}
                  </td>

                  <td className="p-4">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-gray-500"
                >
                  No feedback available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}