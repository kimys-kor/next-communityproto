import Breadcrumb from "@/app/components/BreadCrumb";
import ThreeBanner from "@/app/components/ThreeBanner";
import WarrantyBanner from "@/app/warranty/(components)/WarrantyBanner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breadcrumbItems = {
    title: "먹튀검증",
    subMenu: [
      { name: "검증", href: "/verify" },
      { name: "피해사례", href: "/verify/case" },
    ],
  };

  return (
    <div>
      <ThreeBanner></ThreeBanner>
      <WarrantyBanner></WarrantyBanner>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <div className="mt-8">{children}</div>
    </div>
  );
}
