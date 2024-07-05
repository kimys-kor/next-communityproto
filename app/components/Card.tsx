import Link from "next/link";

interface CardProps {
  title: String;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="w-full shadow-md p-3 rounded-md bg-white font-semibold">
      <div className="h-10 leading-8 flex justify-between border-solid border-b border-gray-light">
        <h1 className="text-lg font-bold">{title}</h1>
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
      <div className="w-full h-10 flex justify-start items-center border-solid border-b border-gray-light">
        <p className="w-12 xl:w-16 truncate text-purple-600 text-[11px]">
          한국증시
        </p>
        <p className="truncate text-[12px]">주가는 언제나 실적에 수렴한다</p>
        <span className="w-12 truncate text-red-500 text-[10px] flex justify-center items-center">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-red-500 cursor-pointer"
          >
            <rect x="45" y="10" width="10" height="80" />
            <rect x="10" y="45" width="80" height="10" />
          </svg>
          23
        </span>
      </div>
      <div className="w-full h-10 flex justify-start items-center border-solid border-b border-gray-light">
        <p className="w-12 xl:w-16 truncate text-purple-600 text-[11px]">
          한국증시
        </p>
        <p className="truncate text-[12px]">주가는 언제나 실적에 수렴한다</p>
        <span className="w-12 truncate text-red-500 text-[10px] flex justify-center items-center">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-red-500 cursor-pointer"
          >
            <rect x="45" y="10" width="10" height="80" />
            <rect x="10" y="45" width="80" height="10" />
          </svg>
          23
        </span>
      </div>
      <div className="w-full h-10 flex justify-start items-center border-solid border-b border-gray-light">
        <p className="w-12 xl:w-16 truncate text-purple-600 text-[11px]">
          한국증시
        </p>
        <p className="truncate text-[12px]">주가는 언제나 실적에 수렴한다</p>
        <span className="w-12 truncate text-red-500 text-[10px] flex justify-center items-center">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-red-500 cursor-pointer"
          >
            <rect x="45" y="10" width="10" height="80" />
            <rect x="10" y="45" width="80" height="10" />
          </svg>
          12
        </span>
      </div>
    </div>
  );
};

export default Card;
