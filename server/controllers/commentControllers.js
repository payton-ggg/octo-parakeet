import { AppDataSource } from "../config/db.js";
import { Comment } from "../entities/Comment.js";
import { Post } from "../entities/Post.js";

const postRepository = AppDataSource.getRepository(Post);
const commentRepository = AppDataSource.getRepository(Comment);

export const createComment = async (req, res) => {
  try {
    const post = await postRepository.findOne({
      where: { id: parseInt(req.params.postId) },
    });

    if (!post) {
      res.status(404).json({ message: "Пост не найден" });
      return;
    }
    const comment = commentRepository.create({
      postId: parseInt(post.id),
      ...req.body,
    });

    await commentRepository.save(comment);

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
