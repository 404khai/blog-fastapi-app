import { useState } from "react";
import api from "../api/client";

export default function CreateCommentForm() {
  const [comment, setComment] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [postId, setPostId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/comments/new", {
        comment,
        ownerId: Number(ownerId),
        postId: Number(postId),
      });
      setMessage(`Comment added: ${res.data.comment}`);
      setComment("");
      setOwnerId("");
      setPostId("");
    } catch (error: any) {
      setMessage(error.response?.data?.detail || "Error adding comment");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Add Comment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          placeholder="Owner ID"
          value={ownerId}
          onChange={(e) => setOwnerId(e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          placeholder="Post ID"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          className="border rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
        >
          Add Comment
        </button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}
