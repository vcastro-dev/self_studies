import "./App.css";
import { Input } from "./ui/Input";

function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1>Create Post</h1>
      <form
        method="POST"
        className="flex justify-center items-center flex-col gap-4"
      >
        <div>
          <Input type="text" placeholder="Title" />
        </div>
        <div>
          <Input type="text" placeholder="Content" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
