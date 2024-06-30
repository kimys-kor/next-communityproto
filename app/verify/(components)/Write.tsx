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
    console.log("Content saved:", content);
  };

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();

  return (
    <div className="p-6 flex flex-col gap-3">
      <h1 className="text-xl font-light">피해사례 작성</h1>
      <form className="border-solid border-gray-300 border-b">
        <div className="flex flex-col border-solid border-t">
          <div className="flex justify-between items-center h-20 border-solid border-b border-gray-300">
            <div className="w-1/3 h-full flex justify-center items-center bg-[#F2F4F9]">
              제목
            </div>
            <div className="w-full flex justify-center items-center h-10 pl-2">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="truncate appearance-none border border-solid w-[100%] px-7 py-3 font-light text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></input>
            </div>
          </div>
          <div className="flex justify-between items-center h-20">
            <div className="w-1/3 h-full flex justify-center items-center bg-[#F2F4F9]">
              피해금액
            </div>
            <div className="w-full flex justify-center items-center h-10 pl-2">
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="truncate appearance-none border border-solid w-[100%] px-7 py-3 font-light text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></input>
            </div>
          </div>
        </div>
      </form>
      <section>
        <PostEditor
          forwardedRef={quillRef}
          value={content}
          onChange={handleContentChange}
        />
      </section>

      <div className="w-full flex justify-end gap-2">
        <button className="border-solid border border-indigo-500 text-indigo-500 px-4 py-2 w-24 h-12 hover:bg-indigo-100">
          취소
        </button>
        <button
          className="bg-indigo-500 text-white px-4 py-2 w-24 h-12 hover:bg-indigo-700"
          onClick={saveContent}
        >
          작성완료
        </button>
      </div>
    </div>
  );
}

export default Write;
