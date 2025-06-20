"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export function DeleteButton({ postId }: { postId: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirm) return;

    try {
      await api.delete(`/posts/${postId}`);
      router.push("/");
    } catch (err) {
      console.error("Error deleting post", err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:underline text-sm"
    >
      Delete Post
    </button>
  );
}
