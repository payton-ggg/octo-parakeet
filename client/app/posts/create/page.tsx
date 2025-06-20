"use client";

import PostForm from "../../../components/PostForm";
import { useRouter } from "next/navigation";
import { api } from "../../../lib/api";

export default function CreatePostPage() {
  const router = useRouter();

  const handleCreate = async (data: { title: string; content: string }) => {
    try {
      await api.post("/posts", data);
      router.push("/");
    } catch (err) {
      console.error("Failed to create post", err);
    }
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <PostForm onSubmit={handleCreate} />
    </main>
  );
}
