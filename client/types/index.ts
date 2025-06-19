export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  post: Post;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  comments?: Comment[];
}
