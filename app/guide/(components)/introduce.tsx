import trophy from "/public/images/trophy.png";
import Image from "next/image";

function introduce() {
  return (
    <section className="flex bg-[#EEF2FF] py-28 px-20">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-4xl font-semibold">스포츠커뮤니티</h1>
          <p className="text-4xl font-semibold">
            <span className="text-blue">No.1</span>먹튀타파 소개
          </p>
          <div className="pt-10 text-xl font-medium text-mediumblue ">
            <p>먹튀타파는 국내 최대 규모의 방대한 정보를</p>
            <p>보유하고 있는 먹튀 검증 커뮤니티입니다.</p>
          </div>
          <p className="pt-10 text-deepsky text-sm">
            스포츠 커뮤니티를 운영하는 저희 사이트에 오신 것을 환영합니다. 최근
            들어 먹튀 사건이 빈번하게 발생하면서 먹튀 검증의 중요성이 그 어느
            때보다 높아졌습니다. 저희 사이트는 여러 해 동안 먹튀 사이트를 검증한
            경험을 바탕으로 실제로 여러 사이트를 철저히 조사해왔습니다. 저희는
            철저한 실사를 통해 검증을 진행하기 때문에, 여러분께 안전한
            사이트만을 추천해드릴 수 있습니다. 저희가 추천하는 모든 온라인 토토
            사이트는 안전하다고 판단된 회사들 중에서 엄선된 것들입니다. 입금을
            요구하는 사이트를 추천할 때는 더욱 신중하게 검토하여 여러분께 신뢰할
            수 있는 정보를 제공합니다. 반면, 일부 사기 검증 사이트는 광고 수익을
            위해 사기 검증을 제대로 하지 않고 온라인 토토 사이트를 추천하는
            경우가 있습니다. 이런 경우에는 사기로 인한 피해가 고스란히
            사용자에게 돌아갈 수 있으므로 매우 주의해야 합니다. 저희 사이트는
            검증 없이 추천하는 일이 없으며, 직접 검증한 사이트만을 추천합니다.
            따라서 저희가 추천하는 사이트는 안심하고 이용하셔도 됩니다. 여러분의
            안전한 토토 경험을 위해 언제나 최선을 다하겠습니다. 감사합니다.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <Image alt="먹튀타파소개" width={729} height={628} src={trophy}></Image>
      </div>
    </section>
  );
}

export default introduce;
