import ThreeBanner from "../components/ThreeBanner";
import Breadcrumb from "../components/BreadCrumb";
import ProgressSliderPage from "../components/ProgressSliderPage";

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
      검증
    </div>
  );
}

export default page;
