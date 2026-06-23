import { useState } from "react";
import toast from "react-hot-toast";

import {
  MessageSquare,
  Send,
  Star,
  User,
  Mail,
  FolderOpen,
} from "lucide-react";

import { useGetCategoriesQuery } from "../features/category/categoryApi";
import { useSubmitFeedbackMutation } from "../features/feedback/feedbackApi";

export default function FeedbackPage() {
  const [categoryId, setCategoryId] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [name, setName] =
    useState("");

  const [comment, setComment] =
    useState("");

  const {
    data: categoriesResponse,
  } = useGetCategoriesQuery();

  const categories =
    categoriesResponse?.data || [];

  const [
    submitFeedback,
    { isLoading },
  ] =
    useSubmitFeedbackMutation();

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await submitFeedback({
        categoryId,
        email,
        name,
        comment,
      }).unwrap();

      toast.success(
        "Feedback submitted successfully"
      );

      setCategoryId("");
      setEmail("");
      setName("");
      setComment("");
    } catch {
      toast.error(
        "Failed to submit feedback"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Section */}

        <div className="hidden lg:flex bg-linear-to-br from-violet-600 via-purple-600 to-indigo-700 text-white p-16 flex-col justify-center">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={40} />
              <h1 className="text-4xl font-bold">
                Acowale Feedback
              </h1>
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Your Feedback
              <br />
              Drives Innovation
            </h2>

            <p className="mt-6 text-lg text-violet-100">
              Help us improve our
              products and services by
              sharing your experience.
              Every suggestion matters.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3">
                <Star
                  size={18}
                />
                Product Improvements
              </div>

              <div className="flex items-center gap-3">
                <Star
                  size={18}
                />
                Service Experience
              </div>

              <div className="flex items-center gap-3">
                <Star
                  size={18}
                />
                Feature Requests
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}

        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl mx-auto flex items-center justify-center mb-4">
                <MessageSquare className="text-violet-600" />
              </div>

              <h2 className="text-3xl font-bold text-slate-800">
                Submit Feedback
              </h2>

              <p className="text-slate-500 mt-2">
                We'd love to hear your
                thoughts.
              </p>
            </div>

            <form
              onSubmit={
                handleSubmit
              }
              className="space-y-5"
            >
              <div className="relative">
  <FolderOpen
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
  />

  <select
    value={categoryId}
    onChange={(e) =>
      setCategoryId(e.target.value)
    }
    className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none appearance-none"
  >
    <option value="">
      Select Category
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

              <div className="relative">
  <User
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
  />

  <input
    value={name}
    onChange={(e) =>
      setName(e.target.value)
    }
    placeholder="Your Name"
    className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none"
  />
</div>
              <div className="relative">
  <Mail
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
  />

  <input
    value={email}
    onChange={(e) =>
      setEmail(e.target.value)
    }
    placeholder="Your Email"
    className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none"
  />
</div>

              <div className="relative">
  <MessageSquare
    size={18}
    className="absolute left-4 top-4 text-slate-400"
  />

  <textarea
    value={comment}
    onChange={(e) =>
      setComment(e.target.value)
    }
    rows={6}
    placeholder="Share your feedback..."
    className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-3 resize-none focus:ring-2 focus:ring-violet-500 outline-none"
  />
</div>

              <button
                disabled={
                  isLoading
                }
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
              >
                <Send
                  size={18}
                />

                {isLoading
                  ? "Submitting..."
                  : "Submit Feedback"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}