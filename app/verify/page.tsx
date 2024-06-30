import ThreeBanner from "../components/ThreeBanner";
import WarrantyBanner from "../warranty/(components)/WarrantyBanner";
import Breadcrumb from "../components/BreadCrumb";

function page() {
  const breadcrumbItems = {
    title: "먹튀검증",
    subMenu: [
      { name: "검증", href: "/verify" },
      { name: "피해사례", href: "/verify/case" },
    ],
  };

  return (
    <div className="flex flex-col max-w-[1200px] gap-1">
      <ThreeBanner></ThreeBanner>
      <WarrantyBanner></WarrantyBanner>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      검증
    </div>
  );
}

export default page;
