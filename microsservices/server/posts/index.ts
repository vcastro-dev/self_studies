import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [];

app.use(cors());
app.use(express.json());

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const id = posts.length + 1;
  const newPost = { id, title, content };
  posts.push(newPost);
  res.json(newPost);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
