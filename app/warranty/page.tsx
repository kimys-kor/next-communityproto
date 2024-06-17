import React from "react";
import dynamic from "next/dynamic";
import WarrantyBanner from "./(components)/WarrantyBanner";
const PartnerCard = dynamic(() => import("./(components)/PartnerCard"), {
  ssr: false,
});

interface ImgContent {
  img: string;
  title: string;
  code: string;
}

function Page() {
  const imgContent: ImgContent[] = [
    { img: "/images/homebanner/1.jpg", title: "땅콩", code: "mttp" },
    { img: "/images/homebanner/2.png", title: "물음표", code: "mttp" },
    { img: "/images/homebanner/3.jpg", title: "bet38", code: "mttp" },
    { img: "/images/homebanner/4.jpg", title: "onetup", code: "mttp" },
    { img: "/images/homebanner/5.jpg", title: "식스", code: "mttp" },
    { img: "/images/homebanner/6.jpg", title: "정글", code: "mttp" },
  ];

  return (
    <div className="flex flex-col max-w-[1200px]">
      <WarrantyBanner />
      <div className="p-3 grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgContent.map((item, index) => (
          <article
            key={index}
            className="w-full h-auto bg-white/25 rounded-2xl shadow-md flex flex-col gap-4 justify-start"
          >
            <PartnerCard imgContent={item} />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Page;
