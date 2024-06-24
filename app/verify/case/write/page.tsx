"use client";

import PostEditor from "@/app/components/texteditor/PostEditor";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";

function Write() {
  const [content, setContent] = useState("");
  const quillRef = useRef<ReactQuill>(null);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const saveContent = () => {
    // Example function to handle saving content
    console.log("Content saved:", content);
    // Here you can implement the actual save logic, e.g., sending the content to a server
  };

  const loadContent = () => {
    // Example function to handle loading content
    const loadedContent = "<p>Previously saved content</p>";
    setContent(loadedContent);
    // Here you can implement the actual load logic, e.g., fetching content from a server
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Rich Text Editor</h1>
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={saveContent}
        >
          Save Content
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={loadContent}
        >
          Load Content
        </button>
      </div>
      <PostEditor
        forwardedRef={quillRef}
        value={content}
        onChange={handleContentChange}
        placeholder="Write something..."
        className="bg-white shadow p-4 rounded-lg"
      />
    </div>
  );
}

export default Write;
