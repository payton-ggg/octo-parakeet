import { notFound } from "next/navigation";
import CommentForm from "@/components/CommentForm";
import { api } from "@/lib/api";
import { Post } from "@/types";
import { DeleteButton } from "@/components/DeletePost";

async function fetchPost(id: string): Promise<Post | null> {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch {
    return null;
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await fetchPost(id);

  if (!post) {
    notFound(); // 404
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        Created at: {new Date(post.createdAt).toLocaleString()}
      </p>
      <p className="text-lg mb-6">{post.content}</p>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      {post.comments && post.comments.length > 0 ? (
        <ul className="space-y-4 list-none">
          {post.comments.map((comment) => (
            <li key={comment.id} className="border p-3 rounded">
              <p className="text-sm text-gray-600">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
      <DeleteButton postId={post.id} />
      <CommentForm postId={post.id} />
    </main>
  );
}
