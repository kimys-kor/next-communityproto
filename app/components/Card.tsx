import Link from "next/link";

interface CardProps {
  title: String;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="w-full shadow-md p-3 rounded-md bg-[#f7f8fa]/35">
      <div className="h-10 leading-8 flex border-solid border-b border-gray-light">
        <h1 className="text-lg">{title}</h1>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국 증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-purple-600 text-sm">(23)</p>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국 증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-purple-600 text-sm">(23)</p>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국 증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-purple-600 text-sm">(23)</p>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국 증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-purple-600 text-sm">(23)</p>
      </div>
      <div className="truncate w-full h-10 flex gap-2 justify-start items-center border-solid border-b border-gray-light">
        <p className="text-purple-600 text-sm">한국 증시</p>
        <p className="text-sm">주가는 언제나 실적에 수렴한다</p>
        <p className="text-purple-600 text-sm">(23)</p>
      </div>
    </div>
  );
};

export default Card;
