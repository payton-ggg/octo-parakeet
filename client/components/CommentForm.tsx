"use client";

import { api } from "@/lib/api";
import { useForm } from "react-hook-form";

interface Props {
  postId: number;
  onSuccess?: () => void;
}

export default function CommentForm({ postId, onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ content: string }>();

  const onSubmit = async (data: { content: string }) => {
    try {
      await api.post(`/comments/${postId}/comments`, {
        content: data.content,
      });

      reset();
      onSuccess?.();
    } catch (err) {
      console.error("Failed to post comment", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
      <textarea
        {...register("content", { required: "Comment is required" })}
        placeholder="Write your comment..."
        className="w-full border rounded p-2 min-h-[80px]"
      />
      {errors.content && (
        <p className="text-red-500 text-sm">{errors.content.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Comment
      </button>
    </form>
  );
}
