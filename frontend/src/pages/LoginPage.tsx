import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

import { useLoginMutation } from "../features/auth/authApi";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [login, { isLoading }] =
    useLoginMutation();

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response =
        await login({
          email,
          password,
        }).unwrap();

      localStorage.setItem(
        "token",
        response.token
      );

      toast.success(
        "Login successful"
      );

      navigate(
        "/admin/dashboard"
      );
    } catch {
      toast.error(
        "Invalid credentials"
      );
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      {/* Left Hero Section */}

      <div className="hidden lg:flex bg-linear-to-br from-violet-700 via-purple-600 to-indigo-700 text-white p-16 flex-col justify-center">
        <div className="max-w-lg">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck size={42} />

            <h1 className="text-4xl font-bold">
              Acowale Analytics
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Feedback
            <br />
            Intelligence
            <br />
            Platform
          </h2>

          <p className="mt-6 text-violet-100 text-lg">
            Monitor customer feedback,
            identify trends and gain
            actionable insights through
            powerful analytics.
          </p>

          <div className="mt-10 space-y-4">
            <div>
              ✓ Real-time Analytics
            </div>

            <div>
              ✓ Category Insights
            </div>

            <div>
              ✓ Feedback Management
            </div>

            <div>
              ✓ Admin Dashboard
            </div>
          </div>
        </div>
      </div>

      {/* Login Section */}

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="text-violet-600" />
            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back
            </h2>

            <p className="text-slate-500 mt-2">
              Sign in to access the admin
              dashboard.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Email */}

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all"
              />
            </div>

            {/* Password */}

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full border border-slate-200 rounded-xl pl-12 pr-12 py-3 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {/* Submit */}

            <button
              disabled={isLoading}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold transition-all shadow-md"
            >
              {isLoading
                ? "Signing In..."
                : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}