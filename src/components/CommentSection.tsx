"use client";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment] = useState("");

  const loadComments = () => api.get(`/comments/post/${postId}`).then(setComments);

  useEffect(() => {
    loadComments();
  }, [postId]);

  const addComment = async () => {
    const ownerId = localStorage.getItem("userId");
    if (!ownerId) return alert("You must create a user first!");
    await api.post("/comments/new", { comment, ownerId: Number(ownerId), postId });
    setComment("");
    loadComments();
  };

  return (
    <div className="mt-3 border-t border-black pt-2">
      <h4 className="font-semibold mb-1">Comments</h4>
      {comments.map(c => (
        <p key={c.id} className="ml-2 border-b border-black py-1 text-sm">
          <b>{c.owner.name}:</b> {c.comment}
        </p>
      ))}
      <div className="flex mt-2">
        <input
          placeholder="Add comment..."
          className="flex-1 border border-black px-2"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button onClick={addComment} className="ml-2">Send</button>
      </div>
    </div>
  );
}
