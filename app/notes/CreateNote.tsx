"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async (e) => {
    e.preventDefault()
    try {
      const url = "http://127.0.0.1:8090/api/collections/notes/records";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      setContent("");
      setTitle("");

      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={(e) => create(e)}>
      <h3>Create a new note</h3>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Create note</button>
    </form>
  );
}
