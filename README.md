# 📝 Full Stack Blog Application

A full-featured blog platform built with:

- 🧠 **Backend:** Express.js, PostgreSQL, TypeORM
- 💻 **Frontend:** Next.js 15 (App Router), React 18, Redux Toolkit
- 💅 **Styling:** Tailwind CSS
- 🌐 **PWA:** Manifest, responsive, mobile-ready

🧪 API Endpoints
Base URL: http://localhost:5000/api

| Method | Endpoint                     | Description                   |
| ------ | ---------------------------- | ----------------------------- |
| GET    | `/posts`                     | Get paginated posts           |
| GET    | `/posts/:postId`             | Get single post with comments |
| POST   | `/posts`                     | Create new post               |
| PUT    | `/posts/:postId`             | Update post                   |
| DELETE | `/posts/:postId`             | Delete post                   |
| POST   | `/comments/:postId/comments` | Add comment                   |

Sure, here’s a short and clear `README.md` in English with instructions on how to run your full-stack blog app:

---

## 🚀 How to Run the Project

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/payton-ggg/octo-parakeet
cd octo-parakeet
```

### 📦 2. Install Dependencies

```bash
cd client && npm install

cd server && npm install
```

### ⚙️ 3. Set Up `.env` in `server/`

Create a `.env` file in the `server/` folder:

```env
DATABASE_URL=postgres://youruser:yourpass@localhost:5432/blog
```

Make sure PostgreSQL is running and a database named `blog` exists.

---

### 🧠 4. Start the Backend

```bash
cd server
npm run dev
```

The API will be running at: [http://localhost:5000](http://localhost:5000)

---

### 💻 5. Start the Frontend

```bash
cd client
npm run dev
```

The app will be available at: [http://localhost:3000](http://localhost:3000)
