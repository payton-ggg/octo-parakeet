import { EntitySchema } from "typeorm";

export const Comment = new EntitySchema({
  name: "Comment",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    postId: {
      type: "int",
    },
    content: {
      type: "varchar",
      length: 50,
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
