import Image from "next/image";
import Introduce from "./(components)/introduce";
import question from "/public/images/question.png";
import talkball from "/public/images/talkball.png";

function page() {
  return (
    <div className="w-full">
      <main>
        <Introduce></Introduce>
        <section className="flex flex-col justify-center items-center py-20">
          <Image
            alt="왜먹튀타파인가?"
            width={248}
            height={255}
            src={question}
          ></Image>
          <h1 className="text-4xl font-semibold">
            <span className="text-blue">먹튀타파, </span>왜 믿을 수 있나요?
          </h1>
          <div className="flex flex-col items-center">
            <div className="w-full flex mt-10 gap-5">
              <article className="w-1/2 bg-[#EEF2FF] rounded-md py-5 px-10 flex justify-start items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-normalblue text-xl font-bold">
                  1
                </span>
                <div className="text-lg font-medium">
                  <div>
                    <span className="text-normalblue">
                      다년 간의 토토사이트 이용경험 및 먹튀검증
                    </span>
                  </div>
                  <div>
                    <span className="text-normalblue">경험</span>을 가지고
                    있습니다.
                  </div>
                </div>
              </article>
              <article className="w-1/2 bg-[#EEF2FF] rounded-md py-5 px-10 flex justify-start items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-normalblue text-xl font-bold">
                  2
                </span>
                <div className="text-lg font-medium">
                  <div>
                    믿을만한 업체로부터
                    <span className="text-normalblue"> 보증금을 받고 추천</span>
                  </div>
                  <div>해 드리므로 이중으로 먹튀 예방이 가능합니다</div>
                </div>
              </article>
            </div>
            <div className="w-full flex mt-5 gap-5">
              <article className="bg-[#EEF2FF] rounded-md py-5 px-10 flex justify-start items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-normalblue text-xl font-bold">
                  3
                </span>
                <div className="text-lg font-medium">
                  <div>
                    추천인 코드를 제공해 드리기 때문에
                    <span className="text-normalblue">신규가입 시에</span>
                  </div>
                  <div>
                    <span className="text-normalblue">막대한 혜택</span>을 누릴
                    수 있습니다.
                  </div>
                </div>
              </article>
              <article className="bg-[#EEF2FF] rounded-md py-5 px-10 flex justify-start items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-normalblue text-xl font-bold">
                  4
                </span>
                <div className="text-lg font-medium">
                  <div>
                    자유게시판을 통해
                    <span className="text-normalblue">
                      누구나 토토사이트 관련 정보를
                    </span>
                  </div>
                  <div>
                    <span className="text-normalblue">공유</span>할 수 있어
                    플레이에 도움을 받을 수 있습니다.
                  </div>
                </div>
              </article>
            </div>
            <div className="mt-5 w-1/2">
              <article className="bg-[#EEF2FF] rounded-md py-5 px-10 flex justify-start items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-normalblue text-xl font-bold">
                  5
                </span>
                <div className="text-lg font-medium">
                  <div>
                    먹튀타파는
                    <span className="text-normalblue">
                      {" "}
                      게시판 및 검증 사이트를 직접관리
                    </span>
                    하고
                  </div>
                  <div>있기에 사이트 전부를 신뢰할 수 있습니다.</div>
                </div>
              </article>
            </div>
          </div>
          <p className="w-full flex justify-center items-center mt-5">
            <Image
              src={talkball}
              width={36}
              height={36}
              alt="sub description"
            ></Image>
          </p>
        </section>
      </main>
    </div>
  );
}

export default page;
