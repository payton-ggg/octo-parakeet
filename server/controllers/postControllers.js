import { AppDataSource } from "../config/db.js";
import { Post } from "../entities/Post.js";

const postRepository = AppDataSource.getRepository(Post);

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postRepository.find({
      relations: ["comments"],
    });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await postRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ["comments"],
    });

    if (!post) {
      res.status(404).json({ message: "Пост не найден" });
      return;
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = postRepository.create({
      title: req.body.title,
      content: req.body.content,
    });

    await postRepository.save(post);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await postRepository.findBy(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Пост не найден" });
      return;
    }
    await postRepository.update(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await postRepository.findByPk(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Пост не найден" });
      return;
    }
    await post.destroy();
    res.status(200).json({ message: "Пост удален" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
