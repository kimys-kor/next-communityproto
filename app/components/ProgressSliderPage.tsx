import pc_main_top_new02 from "../../public/images/pc_main_top_new02.gif";
import ProgressSlider from "./ProgressSlider";

export default function ProgressSliderPage() {
  const items = [
    {
      img: pc_main_top_new02,
      desc: "main_banner",
    },
    {
      img: pc_main_top_new02,
      desc: "main_banner",
    },
    {
      img: pc_main_top_new02,
      desc: "main_banner",
    },
    {
      img: pc_main_top_new02,
      desc: "main_banner",
    },
  ];

  return (
    <main className="relative h-48 flex flex-col justify-center bg-transparent overflow-hidden">
      <div className=" max-w-6xl mx-auto p-3">
        <div className="flex justify-center">
          <ProgressSlider items={items} />
        </div>
      </div>
    </main>
  );
}
