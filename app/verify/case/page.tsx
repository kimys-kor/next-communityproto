import Breadcrumb from "@/app/components/BreadCrumb";
import React from "react";
import Board from "../(components)/Board";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";

function page() {
  const breadcrumbItems = {
    title: "먹튀검증",
    subMenu: [
      { name: "검증", href: "/verify" },
      { name: "피해사례", href: "/verify/case" },
    ],
  };

  return (
    <div className="flex flex-col max-w-[1200px] gap-6">
      <ProgressSliderPage></ProgressSliderPage>
      <ThreeBanner></ThreeBanner>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <Board />
    </div>
  );
}

export default page;
