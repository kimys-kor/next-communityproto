import React from "react";

interface Post {
  no: number;
  title: string;
  name: string;
  date: string;
  views: number;
  likes: number;
  dislikes: number;
}

interface BoardProps {
  headers: string[];
  posts: Post[];
}

const Board: React.FC<BoardProps> = ({ headers, posts }) => {
  return (
    <div className="w-full overflow-x-auto">
      {/* 제목 */}
      <div className="flex bg-indigo-500 text-white font-bold uppercase tracking-wider">
        {headers.map((header, index) => (
          <div key={index} className="flex-1 p-2 text-center whitespace-nowrap">
            {header}
          </div>
        ))}
      </div>
      {/* 게시글 */}
      {posts.map((post, index) => (
        <div
          key={index}
          className={`flex items-center border-b border-gray-200 p-2 ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <div className="flex-1 p-2 text-center truncate">{post.no}</div>
          <div className="flex-1 p-2 text-center truncate">{post.title}</div>
          <div className="flex-1 p-2 text-center truncate">{post.name}</div>
          <div className="flex-1 p-2 text-center truncate">{post.date}</div>
          <div className="flex-1 p-2 text-center truncate">{post.views}</div>
          <div className="flex-1 p-2 text-center truncate">{post.likes}</div>
          <div className="flex-1 p-2 text-center truncate">{post.dislikes}</div>
        </div>
      ))}
    </div>
  );
};

export default Board;
