"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchPosts } from "@/store/postsSlice";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <Link href="/posts/create" className="text-blue-500 underline">
        Create Post
      </Link>

      {status === "loading" && <p>Loading...</p>}

      <ul className="mt-4 space-y-4 list-none ">
        {items.map((post) => (
          <li key={post.id} className="">
            <Link
              href={`/posts/${post.id}`}
              className="text-[#000] no-underline hover:underline"
            >
              <div className="p-2 border rounded hover:bg-gray-50">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
