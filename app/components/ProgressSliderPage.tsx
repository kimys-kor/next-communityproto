import main_top from "/public/images/main_top.png";
import ProgressSlider from "./ProgressSlider";
import ResponsiveSlider from "./MultiResponsiveSlider";

export default function ProgressSliderPage() {
  const items = [
    {
      img: main_top,
      desc: "main_banner",
    },
    // {
    //   img: main_top,
    //   desc: "main_banner",
    // },
    // {
    //   img: main_top,
    //   desc: "main_banner",
    // },
    // {
    //   img: main_top,
    //   desc: "main_banner",
    // },
  ];

  const images = [
    "/images/11.PNG",
    "/images/22.PNG",
    "/images/33.PNG",
    "/images/44.PNG",
  ];

  return (
    <main className="relative h-48 flex flex-col justify-center bg-transparent overflow-hidden mt-3">
      <div className=" max-w-6xl mx-auto p-3">
        <div className="flex justify-center bg-[#F2F7FF]">
          {/* <ProgressSlider items={items} /> */}
          <ResponsiveSlider images={images}></ResponsiveSlider>
        </div>
      </div>
    </main>
  );
}
