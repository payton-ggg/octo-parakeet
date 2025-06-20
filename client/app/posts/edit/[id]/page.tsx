"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import PostForm from "@/components/PostForm";
import { Post } from "@/types";
import { api } from "@/lib/api";

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error loading post", err);
      }
    };

    fetchPost();
  }, [id]);

  const handleUpdate = async (data: { title: string; content: string }) => {
    try {
      await api.put(`/posts/${id}`, data);
      router.push(`/posts/${id}`);
    } catch (err) {
      console.error("Failed to update post", err);
    }
  };

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <PostForm
        onSubmit={handleUpdate}
        isEditing
        initialValues={{ title: post.title, content: post.content }}
      />
    </main>
  );
}
