import { DataSource } from "typeorm";
import { Post } from "../entities/Post.js";
import { Comment } from "../entities/Comment.js";
import { configDotenv } from "dotenv";

configDotenv();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Post, Comment],
  synchronize: true, // strict
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
});
