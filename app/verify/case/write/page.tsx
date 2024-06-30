"use client";

import PostEditor from "@/app/components/texteditor/PostEditor";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import Write from "../../(components)/Write";

function Page() {
  return (
    <div className="flex flex-col max-w-[1200px] gap-1">
      <Write></Write>
    </div>
  );
}

export default Page;
