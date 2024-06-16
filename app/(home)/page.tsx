import NewPost from "../components/NewPost";
import NewPost2 from "../components/NewPost2";
import ProgressSliderPage from "../components/ProgressSliderPage";
import ReactiveSlider from "../components/ReactiveSlider";

export default function Home() {
  return (
    <div className="flex max-w-[1200px]">
      <article className="w-full h-full flex flex-col gap-4">
        <ProgressSliderPage></ProgressSliderPage>

        <section className="grid grid-cols-2 gap-3">
          <NewPost></NewPost>
          <NewPost2></NewPost2>
        </section>
        <main className="w-full h-auto px-12 py-11 bg-white/25 rounded-2xl shadow-md flex flex-col gap-4"></main>

        {/* <ReactiveSlider></ReactiveSlider> */}
      </article>
    </div>
  );
}
