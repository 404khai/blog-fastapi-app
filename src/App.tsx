import CreateUserForm from "./components/CreateUserForm";
import CreatePostForm from "./components/CreatePostForm";
import CreateCommentForm from "./components/CreateCommentForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        FastAPI Frontend Demo
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <CreateUserForm />
        <CreatePostForm />
        <CreateCommentForm />
      </div>
    </div>
  );
}
