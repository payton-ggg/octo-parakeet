"use client";

import { useForm } from "react-hook-form";
import { Post } from "@/types";

interface PostFormProps {
  onSubmit: (data: Omit<Post, "id" | "createdAt" | "updatedAt">) => void;
  initialValues?: {
    title: string;
    content: string;
  };
  isEditing?: boolean;
}

export default function PostForm({
  onSubmit,
  initialValues = { title: "", content: "" },
  isEditing = false,
}: PostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          {...register("content", { required: "Content is required" })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-32"
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {isEditing ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
}
