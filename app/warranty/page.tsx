"use client";

import React from "react";
import BreadCrumbs from "../components/BreadCrumb";
import PartnerCard from "./(components)/PartnerCard";
import Paging from "../components/Paging";
import ProgressSliderPage from "../components/ProgressSliderPage";

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

  const breadcrumbItems = {
    title: "보증업체",
    subMenu: [],
  };

  const setPage = function () {
    console.log("온체인지");
  };

  return (
    <div className="flex flex-col max-w-[1200px] gap-3">
      <ProgressSliderPage />
      <BreadCrumbs breadcrumbData={breadcrumbItems}></BreadCrumbs>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgContent.map((item, index) => (
          <article
            key={index}
            className="w-full h-auto bg-white/25 rounded-2xl shadow-md flex flex-col gap-4 justify-start"
          >
            <PartnerCard imgContent={item} />
          </article>
        ))}
      </div>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </div>
  );
}

export default Page;
