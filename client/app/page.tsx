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
    <main className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Posts</h1>
        <p className="text-gray-600 mb-6">Manage and explore your content</p>
        <Link
          href="/posts/create"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Create New Post
        </Link>
      </div>

      {status === "loading" && (
        <div className="flex items-center justify-center py-16">
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-600"></div>
            <div className="absolute inset-0 animate-pulse rounded-full h-12 w-12 border-4 border-transparent border-t-blue-400 opacity-50"></div>
          </div>
          <p className="ml-4 text-gray-600 font-medium">Loading posts...</p>
        </div>
      )}

      <div className="space-y-8 grid grid-cols-3 gap-[5px] mt-[15px] max-[700px]:grid-cols-1">
        {items.map((post) => (
          <article
            key={post.id}
            className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-gray-200 hover:-translate-y-1 backdrop-blur-sm"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {post.content.slice(0, 180)}...
              </p>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-50">
              <Link
                href={`/posts/${post.id}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 font-semibold rounded-full hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Post
              </Link>

              <Link
                href={`/posts/edit/${post.id}`}
                className="inline-flex items-center px-6 py-3 text-gray-500 font-semibold rounded-full hover:bg-gray-50 hover:text-gray-700 transition-all duration-300 pl-2"
              >
                Edit Post
              </Link>
            </div>
          </article>
        ))}
      </div>

      {items.length === 0 && status !== "loading" && (
        <div className="text-center py-20">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            No posts yet
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Get started by creating your first post
          </p>
          <Link
            href="/posts/create"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Create Your First Post
          </Link>
        </div>
      )}
    </main>
  );
}
