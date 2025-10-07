"use client";
import { useState } from "react";
import { api } from "../api/api";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await api.post("/users/new", { name, email, password });
    localStorage.setItem("userId", user.id);
    alert(`Welcome ${user.name}!`);
  };

  return (
    <form onSubmit={createUser} className="max-w-md mx-auto mt-10 space-y-3 border border-black p-6 rounded">
      <h2 className="text-xl font-bold mb-2">Create User</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Create Account</button>
    </form>
  );
}
