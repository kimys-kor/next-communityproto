import test from "../../public/images/test.png";
import logo from "../../public/images/logo.png";
import pc_main_top_new02 from "../../public/images/pc_main_top_new02.gif";
import ProgressSlider from "./ProgressSlider";

export default function ProgressSliderPage() {
  const items = [
    {
      img: pc_main_top_new02,
      desc: "1",
      buttonIcon: test,
    },
    {
      img: pc_main_top_new02,
      desc: "2",
      buttonIcon: test,
    },
    {
      img: pc_main_top_new02,
      desc: "2",
      buttonIcon: test,
    },
    {
      img: pc_main_top_new02,
      desc: "2",
      buttonIcon: test,
    },
  ];

  return (
    <main className="relative flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className=" max-w-6xl mx-auto p-3">
        <div className="flex justify-center">
          <ProgressSlider items={items} />
        </div>
      </div>
    </main>
  );
}
