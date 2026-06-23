import {
  LayoutDashboard,
  MessageSquare,
  LogOut,
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const isDashboard =
    location.pathname ===
    "/admin/dashboard";

  const isFeedback =
    location.pathname ===
    "/admin/feedback";

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen">
      <div className="p-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-violet-600">
          Acowale
        </h1>
      </div>

      <nav className="space-y-2 px-4 py-6">
        <button
          onClick={() =>
            navigate("/admin/dashboard")
          }
          className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${
            isDashboard
              ? "bg-violet-100 text-violet-700 font-semibold"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button
          onClick={() =>
            navigate("/admin/feedback")
          }
          className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${
            isFeedback
              ? "bg-violet-100 text-violet-700 font-semibold"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <MessageSquare size={18} />
          Feedback
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full p-3 rounded-xl text-red-500 hover:bg-red-50 mt-8"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}