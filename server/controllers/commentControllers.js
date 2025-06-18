import { Comment } from "../entities/Comment.js";
import { Post } from "../entities/Post.js";

export const createComment = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    if (!post) {
      res.status(404).json({ message: "Пост не найден" });
      return;
    }
    const comment = await Comment.create({
      ...req.body,
      postId: post.id,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
