import express from "express";
import { AppDataSource } from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("✅ База данных подключена");

    app.listen(5000, () => {
      console.log("🚀 Сервер запущен на http://localhost:5000");
    });
  })
  .catch((error) => {
    console.error("❌ Ошибка подключения к БД:", error);
  });
