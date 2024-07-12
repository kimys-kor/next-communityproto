import Introduce from "../(components)/Introduce";
import Image from "next/image";
import money from "/public/images/money.png";
import search from "/public/images/search.png";
import talkball from "/public/images/talkball.png";

function page() {
  return (
    <div className="w-full">
      <main>
        <Introduce></Introduce>
        <section className="flex flex-col justify-center items-center py-20">
          <Image
            alt="먹튀타파소개"
            width={248}
            height={255}
            src={money}
          ></Image>
          <div className="text-4xl font-semibold">
            <span className="text-blue">꽁머니 </span>바로알기
          </div>
          <div className="pt-5 text-description leading-6 flex flex-col justify-center items-center text-sm">
            <p>
              온라인 토토사이트를 이용하시는 분들은 꽁머니에 대해서 잘 알고 계실
              것 입니다.
            </p>
            <p>
              꽁머니는 온라인 토토사이트에서 플레이어들을 끌어내기 위하여 주로
              사용하는 마케팅 전략이자 이벤트인데요.
            </p>
            <p>
              꽁머니를 준다고 하여 모든 사이트를 이용해서는 안 된다는 점
              기억하셔야 합니다.
            </p>
            <p>
              그 이유는 꽁머니 이벤트로 고객을 유치한 후에 먹튀를 하는
              사이트들이 늘고 있기 때문인데요.
            </p>
            <p>
              꽁머니를 받았다고 해도 먹튀 피해를 입게 된다면 그 피해가 고스란히
              플레이어 책임이 되기 때문에 신중해야 합니다.
            </p>
            <p>
              그렇다면 꽁머니를 지급하는 온라인 토토사이트 중에 어떤 사이트를
              이용해야 안심하고 이용이 가능할까요? 함께 알아보겠습니다.
            </p>
          </div>
          <div className="pt-20 w-full flex items-center justify-center">
            <section className="h-full flex">
              <div className="hidden lg:block h-full relative left-[-3rem] font-bold">
                <h1 className="text-2xl ">안전한 꽁머니</h1>
                <h1 className="text-2xl ">사이트 찾는 방법</h1>
                <div className="hidden lg:block relative left-[-3rem] top-10">
                  <Image
                    alt="먹튀타파소개"
                    width={248}
                    height={255}
                    src={search}
                  ></Image>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-5 ">
              <div className="flex gap-2 w-full">
                <article className="w-80 relative px-5 py-5 text-sm rounded-lg  border border-solid border-[#EEEEEE] flex items-center justify-center">
                  <div className="absolute top-[-0.5rem] rounded-full bg-black w-5 h-5 text-white text-sm  flex items-center justify-center font-light">
                    1
                  </div>
                  <div>
                    <p className="">안전한 꽁머니를 찾고 싶다면</p>
                    <p className="">먹튀검증 업체에 등록된 업체인지를</p>
                    <p className="">확인하세요.</p>
                  </div>
                </article>
                <article className="w-80 relative px-5 py-5 text-sm rounded-lg  border border-solid border-[#EEEEEE] flex items-center justify-center">
                  <div className="absolute top-[-0.5rem] rounded-full bg-black w-5 h-5 text-white text-sm  flex items-center justify-center font-light">
                    2
                  </div>
                  <div>
                    <p className="">먹튀타파는 꽁머니를 지급하는</p>
                    <p className="">사이트 중에서도 검증된 사이트만을</p>
                    <p className="">추천해 드립니다.</p>
                  </div>
                </article>
              </div>
              <div className="flex gap-2 w-full">
                <article className="w-80 relative px-5 py-5 text-sm rounded-lg  border border-solid border-[#EEEEEE] flex items-center justify-center">
                  <div className="absolute top-[-0.5rem] rounded-full bg-black w-5 h-5 text-white text-sm  flex items-center justify-center font-light">
                    3
                  </div>
                  <div>
                    <p className="">꽁머니는 신규가입머니 지급을 의미하는</p>
                    <p className="">것으로 플레이어를 유인하기 위한 방법입</p>
                    <p className="">
                      니다. 그렇기 때문에 꽁머니를 지나치게 많이
                    </p>
                    <p className="">주는 사이트는 경계해야 합니다. 일반적</p>
                    <p className="">으로 가입머니는 최대 3만원 정도 까지</p>
                    <p className="">
                      이며 더 많은 꽁머니를 주는 사이트가 있다면
                    </p>
                    <p className="">이용에 주의해 주세요</p>
                  </div>
                </article>
                <article className="w-80 relative px-5 py-5 text-sm rounded-lg  border border-solid border-[#EEEEEE] flex items-center justify-center">
                  <div className="absolute top-[-0.5rem] rounded-full bg-black w-5 h-5 text-white text-sm  flex items-center justify-center font-light">
                    4
                  </div>
                  <div>
                    <p className="">안전한 꽁머니를 찾고 싶다면</p>
                    <p className="">먹튀검증 업체에 등록된 업체인지를</p>
                    <p className="">확인하세요.</p>
                  </div>
                </article>
              </div>
              <div className="flex gap-2 w-full">
                <article className="w-80 relative px-5 py-5 text-sm rounded-lg  border border-solid border-[#EEEEEE] flex items-center justify-center">
                  <div className="absolute top-[-0.5rem] rounded-full bg-black w-5 h-5 text-white text-sm  flex items-center justify-center font-light">
                    5
                  </div>
                  <div>
                    <p className="">안전한 꽁머니를 찾고 싶다면</p>
                    <p className="">먹튀검증 업체에 등록된 업체인지를</p>
                    <p className="">확인하세요.</p>
                  </div>
                </article>
                <article className="w-80 relative px-5 py-5 text-sm rounded-lg  border border-solid border-[#EEEEEE] flex items-center justify-center">
                  <div className="absolute top-[-0.5rem] rounded-full bg-black w-5 h-5 text-white text-sm  flex items-center justify-center font-light">
                    6
                  </div>
                  <div>
                    <p className="">안전한 꽁머니를 찾고 싶다면</p>
                    <p className="">먹튀검증 업체에 등록된 업체인지를</p>
                    <p className="">확인하세요.</p>
                  </div>
                </article>
              </div>
            </section>
          </div>
          <article className="w-full flex justify-center items-center pt-10 gap-3">
            <Image
              src={talkball}
              width={36}
              height={36}
              alt="sub description"
            ></Image>
            <div className="text-description leading-6">
              <p>
                먹튀타파는 꽁머니를 지급하는 사이트에 대해서 더 신중하고
                정확하게 검증하기 위해 노력하고 있습니다.
              </p>
              <p>
                그렇기에 꽁머니 사이트라고 해서 먹튀 우려가 있는 사이트를 추천해
                드리지 않는다고 확실히 말씀 드릴 수 있습니다.
              </p>
              <p>
                따라서 꽁머니 사이트를 이용하기 이전에 토토핫에 추천되어 있는
                사이트인지를 확인한 후에 이용하시는 것이 좋겠습니다.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default page;
