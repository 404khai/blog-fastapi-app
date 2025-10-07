"use client";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import CommentSection from "./CommentSection";

export default function PostFeed() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    api.get("/posts/all").then(setPosts);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {posts.map((post) => (
        <div key={post.id} className="border border-black p-4 mb-4 rounded">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p className="mb-2">{post.content}</p>
          <small>By user #{post.ownerId}</small>
          <CommentSection postId={post.id} />
        </div>
      ))}
    </div>
  );
}
