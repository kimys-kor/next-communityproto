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

  return (
    <div className="p-6 flex flex-col gap-3">
      <h1 className="text-xl font-light">피해사례 작성</h1>
      <p className="border-b border-solid"></p>
      <section>
        <PostEditor
          forwardedRef={quillRef}
          value={content}
          onChange={handleContentChange}
        />
      </section>

      <div className="w-full flex justify-end gap-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          취소
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={saveContent}
        >
          작성완료
        </button>
      </div>
    </div>
  );
}

export default Write;
