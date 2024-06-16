import Link from "next/link";

interface CardProps {
  title: String;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="w-full shadow-md p-3 rounded-md bg-[#f7f8fa]/35">
      <div className="h-10 leading-8 flex justify-between border-solid border-b border-gray-light">
        <h1 className="text-lg">{title}</h1>
        <div className="group cursor-pointer">
          <svg
            width="15"
            height="15"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-gray-500 group-hover:text-red-500 transition-colors duration-300 cursor-pointer"
          >
            <rect x="45" y="10" width="10" height="80" />
            <rect x="10" y="45" width="80" height="10" />
          </svg>
        </div>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-red-500 text-sm">(23)</p>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-500 text-sm">한국증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-red-500 text-sm">(23)</p>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-red-500 text-sm">(23)</p>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-red-500 text-sm">(23)</p>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-red-500 text-sm">(23)</p>
      </div>
    </div>
  );
};

export default Card;
