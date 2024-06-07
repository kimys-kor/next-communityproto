import Card from "../components/Card";
import Carousel from "../components/ProgressSlider";
import ProgressSliderPage from "../components/ProgressSliderPage";
import Login from "../components/login/Login";

export default function Home() {
  return (
    <div className="flex gap-5">
      <aside className="max-w-sm w-1/3 h-full flex flex-col gap-4">
        <Login></Login>
        <Card title={"주간베스트"}></Card>
        <Card title={"실시간베스트"}></Card>
      </aside>
      <article className="w-full h-full flex flex-col gap-4">
        <ProgressSliderPage></ProgressSliderPage>
      </article>
    </div>
  );
}
