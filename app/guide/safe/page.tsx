import Introduce from "../(components)/Introduce";
import Image from "next/image";
import safe from "/public/images/safe.png";

function page() {
  return (
    <div className="w-full">
      <main>
        <Introduce></Introduce>
        <section className="flex flex-col justify-center items-center py-20">
          <Image alt="먹튀타파소개" width={248} height={255} src={safe}></Image>
          <div className="text-4xl font-semibold px-3">
            <span className="text-blue">안전 놀이터</span> 바로 알기
          </div>
          <div className="pt-5 px-3 text-description leading-6 flex flex-col justify-center items-center text-sm">
            <p>
              토토사이트를 이용하면서 안전놀이터를 찾는 분들이 늘고 있습니다.
            </p>
            <p>
              안전놀이터가 아니면 게임을 진행하더라도 환전을 받을 수 없기
              때문입니다.
            </p>
            <p>
              이를 토토 먹튀사이트라고 부릅니다. 또 일부 많은 유저들이
              안전놀이터가 아닌 경우 조작을 의심하기도 합니다.
            </p>
          </div>
          <div className="pt-20 w-full flex flex-col items-center justify-center text-2xl font-bold">
            <p>조작 없이 안전하게 환급까지 받을 수 있는</p>
            <p>안전한 놀이터를 찾는 것이 중요합니다.</p>
            <article className="block lg:flex py-20 px-5 gap-20 border-solid border-b border-slate-200">
              <div className="text-2xl font-bold">
                <div>안전한 놀이터의</div>
                <div className=" text-blue">조건</div>
              </div>
              <div className="py-5 text-sm font-medium">
                <div className="flex flex-col gap-4">
                  <article className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-base">
                      1
                    </div>
                    <p className=" break-words text-base font-medium">
                      안전토토사이트는 오랫동안 운영된 경력이 있습니다.
                      신생사이트는 먹튀위험이 있음으로 많은 금액을 입금하지 않는
                      것이 좋습니다.
                    </p>
                  </article>
                  <article className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-base">
                      2
                    </div>
                    <p className=" break-words text-base font-medium">
                      안전토토사이트는 먹튀검증업체로부터 먹튀 위험이 없다고
                      검증 받은 사이트를 이용해야 합니다. 다만, 검증업체도
                      제대로 된 정보를 제공하지 않을 수 있으므로 먹튀검증업체를
                      신중하게 선택하는 것이 중요합니다.
                    </p>
                  </article>
                  <article className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-base">
                      3
                    </div>
                    <p className=" break-words text-base font-medium">
                      안전한 놀이터는 기존 유저들로부터 먹튀 피해 루머가 나지
                      않습니다. 먹튀타파 커뮤니티를 살펴보면 토토사이트에서
                      먹튀피해를 당했다는 글을 쉽게 볼 수 있습니다. 이렇게
                      먹튀피해가 있는 사이트라면 입금을 피해야 합니다.
                    </p>
                  </article>
                  <article className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-base">
                      4
                    </div>
                    <p className=" break-words text-base font-medium">
                      안전토토사이트는 유저를 유인하기 위해서 많은 꽁머니를
                      지급하지 않습니다. 지나치게 많은 꽁머니를 지급하는
                      토토사이트가 있다면 이는 안전하지 않은 사이트일 가능성이
                      높습니다.
                    </p>
                  </article>
                </div>
              </div>
            </article>
            <article className="block lg:flex py-20 px-5 gap-20">
              <div className="text-2xl font-bold">
                <div>안전한 토토사이트</div>
                <div className=" text-blue">추천</div>
              </div>
              <div className="py-5 text-sm font-medium">
                <div className="flex flex-col gap-4">
                  <article className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-base">
                      1
                    </div>
                    <p className=" break-words text-base font-medium">
                      먹튀타파는 안전토토사이트를 검증하여 추천하고 있습니다.
                    </p>
                  </article>
                  <article className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-base">
                      2
                    </div>
                    <p className=" break-words text-base font-medium">
                      검증은 여러 단계를 거쳐 진행이 되므로 믿을만한 정보들만
                      추천합니다.
                    </p>
                  </article>
                  <article className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-base">
                      3
                    </div>
                    <p className=" break-words text-base font-medium">
                      다른 커뮤니티와 다르게 많은 유저들이 안전하지 않은
                      사이트에 대해 정보를 공유하기 때문에 실시간으로, 그리고
                      최신의 정보를 먹튀타파에서 찾아보실 수 있습니다.
                    </p>
                  </article>
                  <article className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-base">
                      4
                    </div>
                    <p className=" break-words text-base font-medium">
                      먹튀타파는 안전토토사이트에 대하여 보증금을 받고
                      보증업체들을 선정하고 있습니다. 그렇기에 이중으로
                      먹튀방지를 할 수 있습니다.
                    </p>
                  </article>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
