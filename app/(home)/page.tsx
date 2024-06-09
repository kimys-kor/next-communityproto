import Card from "../components/Card";
import NewPost from "../components/NewPost";
import ProgressSliderPage from "../components/ProgressSliderPage";
import Login from "../components/login/Login";
import IconTabs from "../components/sportRank/IconTabs";

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
        <section className="grid grid-cols-2 gap-3">
          <NewPost></NewPost>
          {/* <NewPost></NewPost> */}
          <div className="bg-gray-100 flex items-center justify-center">
            <IconTabs></IconTabs>
          </div>
        </section>
      </article>
    </div>
  );
}
