import { DataSource } from "typeorm";
import { Post } from "../entities/Post.js";
import { Comment } from "../entities/Comment.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgresql://neondb_owner:npg_ZpLTH8zJ2EyV@ep-calm-breeze-a26o7tio-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require",
  entities: [Post, Comment],
  synchronize: true, // strict
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
});
