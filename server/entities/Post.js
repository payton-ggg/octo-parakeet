import { EntitySchema } from "typeorm";

export const Post = new EntitySchema({
  name: "Post",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    title: {
      type: "varchar",
      length: 255,
    },
    content: {
      type: "text",
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    comments: {
      type: "one-to-many",
      target: "Comment",
      inverseSide: "post",
      cascade: true,
    },
  },
});
