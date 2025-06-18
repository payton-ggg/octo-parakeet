import { EntitySchema } from "typeorm";

export const Comment = new EntitySchema({
  name: "Comment",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    content: {
      type: "varchar",
      length: 50,
    },
    postId: {
      type: "int",
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    post: {
      type: "many-to-one",
      target: "Post",
      joinColumn: {
        name: "postId",
      },
      onDelete: "CASCADE",
      eager: true,
    },
  },
});
