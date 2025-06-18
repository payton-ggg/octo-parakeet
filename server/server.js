import express from "express";
import { AppDataSource } from "./config/db.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
