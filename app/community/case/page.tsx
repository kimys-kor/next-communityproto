import Breadcrumb from "@/app/components/BreadCrumb";
import React from "react";
import PhotoBoard from "../../components/boards/PhotoBoard";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";

function page() {
  const breadcrumbItems = {
    title: "먹튀검증",
    subMenu: [{ name: "피해사례", href: "/community/case" }],
  };

  return (
    <div className="flex flex-col max-w-[1200px] gap-6">
      <ProgressSliderPage></ProgressSliderPage>
      <ThreeBanner></ThreeBanner>
      {/* <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb> */}
      <div className="flex justify-center text-3xl font-semibold">
        <span className="text-blue">피해</span>
        &nbsp;사례
      </div>
      <PhotoBoard />
    </div>
  );
}

export default page;
