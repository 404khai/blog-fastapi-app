import CreateUser from "./components/CreateUser";
import CreatePost from "../components/CreatePost";
import PostFeed from "../components/PostFeed";

export default function App() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Simple Social App</h1>
      <CreateUser />
      <CreatePost />
      <PostFeed />
    </main>
  );
}
