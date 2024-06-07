import test from "../../public/images/test.png";
import ProgressSlider from "./ProgressSlider";

export const metadata = {
  title: "Slider with Progress Indicator - Cruip Tutorials",
  description: "Page description",
};

export default function ProgressSliderPage() {
  const items = [
    {
      img: test,
      desc: "Omnichannel",
      buttonIcon: test,
    },
    {
      img: test,
      desc: "Multilingual",
      buttonIcon: test,
    },
  ];

  return (
    <main className="relative h-1/5 flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex justify-center">
          <ProgressSlider items={items} />
        </div>
      </div>
    </main>
  );
}
