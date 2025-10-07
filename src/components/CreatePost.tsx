"use client";
import { useState } from "react";
import { api } from "../api/api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    const ownerId = localStorage.getItem("userId");
    if (!ownerId) return alert("You must create or log in first!");

    await api.post("/posts/new", { title, content, ownerId: Number(ownerId) });
    alert("Post created!");
    setTitle(""); setContent("");
  };

  return (
    <form onSubmit={createPost} className="max-w-md mx-auto mt-10 space-y-3 border border-black p-6 rounded">
      <h2 className="text-xl font-bold mb-2">Create Post</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" rows={3} value={content} onChange={e => setContent(e.target.value)} />
      <button type="submit">Post</button>
    </form>
  );
}
