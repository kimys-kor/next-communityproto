import TabAnalyzePage from "./(components)/TabAnalyzePage";
import TabACommunityPage from "./(components)/TabACommunityPage";
import ProgressSliderPage from "../components/ProgressSliderPage";
import MultiResponsiveSlider from "../components/MultiResponsiveSlider";
import HomeBanner from "./(components)/HomeBanner";
import { Suspense } from "react";
import HomeBannerSk from "../components/skeleton/HomeBannerSk";
import TabSk from "../components/skeleton/TabSk";

export default function Home() {
  return (
    <div className="flex">
      <article className="w-full h-full flex flex-col gap-4">
        <ProgressSliderPage></ProgressSliderPage>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <TabAnalyzePage></TabAnalyzePage>
          <TabACommunityPage></TabACommunityPage>
        </section>

        <Suspense fallback={<HomeBannerSk></HomeBannerSk>}>
          <HomeBanner></HomeBanner>
        </Suspense>
        {/* <MultiResponsiveSlider></MultiResponsiveSlider> */}
      </article>
    </div>
  );
}
