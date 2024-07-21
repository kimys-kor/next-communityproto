import adminIcon from "/public/images/adminIcon.png";
import writerIcon from "/public/images/writerIcon.png";
import boardViewIcon from "/public/images/boardViewIcon.png";
import boardCommentIcon from "/public/images/boardCommentIcon.png";
import boardLikeIcon from "/public/images/boardLikeIcon.png";
import boardDislikeIcon from "/public/images/boardDislikeIcon.png";
import sirenIcon from "/public/images/sirenIcon.png";
import likeButtonIcon from "/public/images/likeButtonIcon.png";
import dislikeButtonIcon from "/public/images/dislikeButtonIcon.png";
import Image from "next/image";

function BoardDetail() {
  const Content = {
    title: "제목이 들어갑니다",
    content: "내용이 들어갑니다",
    writer: "관리자",
    role: "admin",
    view: 215,
    like: 12,
    dislike: 3,
    date: "2024.07.21",
    comment: ["댓글1", "댓글2"],
  };

  return (
    <div>
      <section className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl">{Content.title}</h1>
        <div className="w-full pt-3 flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            {Content.role == "admin" ? (
              <Image src={adminIcon} width={25} height={20} alt={"adminIcon"} />
            ) : (
              <Image
                src={writerIcon}
                width={25}
                height={20}
                alt={"writerIcon"}
              />
            )}
            <p className="font-semibold">{Content.writer}</p>
          </div>
          <div className="flex gap-1 truncate px-2">
            <p className="font-semibold text-[#AAAAAA]">등록일</p>
            <p className="text-[#AAAAAA] font-light">{Content.date}</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full py-3 border-b border-solid border-black">
          <section className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-[#AAAAAA]">
              <Image
                src={boardViewIcon}
                width={17}
                height={14}
                alt={"viewNumberIcon"}
              />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#AAAAAA]">
              <Image
                src={boardCommentIcon}
                width={17}
                height={14}
                alt={"commentNumberIcon"}
              />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#AAAAAA]">
              <Image
                src={boardLikeIcon}
                width={17}
                height={14}
                alt={"likeNumberIcon"}
              />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#AAAAAA]">
              <Image
                src={boardDislikeIcon}
                width={17}
                height={14}
                alt={"dislikeNumberIcon"}
              />
              {Content.view}
            </div>
          </section>
          <section className="flex gap-1">
            <button className="px-3 py-1 border border-solid border-[#2C4AB6] text-[#2C4AB6] font-bold rounded-sm">
              목록
            </button>
            <button className="px-3 py-1 border border-solid border-[#BD1515] text-[#BD1515] font-bold rounded-sm flex gap-1">
              <Image
                src={sirenIcon}
                width={17}
                height={17}
                alt={"viewNumberIcon"}
              />
              신고
            </button>
          </section>
          {/* content */}
        </div>
      </section>
      <section className="py-10 flex flex-col gap-5 border-b border-solid border-[#AAAAAA]">
        <article className="">{Content.content}</article>
        <div className="w-full flex gap-2 justify-center items-center text-sm">
          <button className="px-4 py-2 rounded-2xl border border-solid border-[#AAAAAA] font-medium flex gap-2">
            <Image
              src={likeButtonIcon}
              width={17}
              height={17}
              alt={"likeButtonIcon"}
            />
            <p>추천</p>
            {Content.like}
          </button>
          <button className="px-4 py-2 rounded-2xl border border-solid border-[#AAAAAA] font-medium flex gap-2">
            <Image
              src={dislikeButtonIcon}
              width={17}
              height={17}
              alt={"dislikeButtonIcon"}
            />
            <p>비추천</p>
            {Content.dislike}
          </button>
        </div>
      </section>
      <section className="py-5">
        <h1 className="text-xl font-semibold">댓글등록</h1>
      </section>
    </div>
  );
}

export default BoardDetail;
