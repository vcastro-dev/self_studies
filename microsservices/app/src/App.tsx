import "./App.css";
import { Input } from "./ui/Input";

function App() {
  async function createPost(formData: FormData) {
    const title = formData.get("title");
    const content = formData.get("content");

    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      window.location.href = "/";
    } else {
      alert("Failed to create post");
    }
  }

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1>Create Post</h1>
      <form
        action={createPost}
        className="flex justify-center items-center flex-col gap-4"
      >
        <div>
          <Input type="text" name={"title"} placeholder="Title" />
        </div>
        <div>
          <Input type="text" name={"content"} placeholder="Content" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
