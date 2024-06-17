interface ImgContent {
  img: string;
  title: string;
  code: string;
}

interface PartnerCardProps {
  imgContent: ImgContent;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ imgContent }) => {
  return (
    <article className="w-full h-auto p-2 bg-white/25 rounded-2xl shadow-md flex flex-col gap-4 items-center">
      <img
        className="w-full rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        src={imgContent.img}
        alt={imgContent.title}
      />
      <table className="w-full rounded-md">
        <tbody>
          <tr>
            <td className="text-center bg-purple-500/35 rounded-md text-white">
              <div className="border-solid border-b border-white p-2">
                사이트
              </div>
              <div className="p-2">코드</div>
            </td>
            <td className="text-center">
              <h3 className="border-solid border-b border-gray-400 p-2">
                {imgContent.title}
              </h3>
              <p className="p-2">{imgContent.code}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default PartnerCard;
