import NewPost from "../components/NewPost";
import NewPost2 from "../components/NewPost2";
import ProgressSliderPage from "../components/ProgressSliderPage";
import ResponsiveSlider from "../components/MultiResponsiveSlider";
import HomeBanner from "./(components)/HomeBanner";
import { Suspense } from "react";
import HomeBannerSk from "../components/skeleton/HomeBannerSk";

export default function Home() {
  return (
    <div className="flex">
      <article className="w-full h-full flex flex-col gap-4">
        <ProgressSliderPage></ProgressSliderPage>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <NewPost></NewPost>
          <NewPost2></NewPost2>
        </section>

        <Suspense fallback={<HomeBannerSk></HomeBannerSk>}>
          <HomeBanner></HomeBanner>
        </Suspense>
        {/* <ResponsiveSlider></ResponsiveSlider> */}
      </article>
    </div>
  );
}
