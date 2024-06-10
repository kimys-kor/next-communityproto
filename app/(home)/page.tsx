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
        <IconTabs></IconTabs>
      </aside>
      <article className="w-full h-full flex flex-col gap-4">
        <ProgressSliderPage></ProgressSliderPage>

        <section className="grid grid-cols-2 gap-3">
          <NewPost></NewPost>
          {/* <NewPost></NewPost> */}
          <main className="w-full h-auto px-12 py-11 bg-white/25 rounded-2xl shadow-md flex flex-col gap-4">
            <header className="w-full h-auto flex justify-center items-center bg-white md:justify-between">
              <img
                src="https://th.bing.com/th/id/OIP.gdubRbL9myZEHWqI065rhQHaHa?rs=1&pid=ImgDetMain"
                alt=""
                className="hidden md:flex w-8 h-8"
              />
              <nav className="bg-white flex flex-wrap gap-5 md:gap-5 md:items-center md:justify-center">
                <a href="" className="text-sm font-black text-zinc-600">
                  About
                </a>
                <a href="" className="text-sm font-black text-zinc-600">
                  What i DO
                </a>
                <a href="" className="text-sm font-black text-zinc-600">
                  Portfolio
                </a>
                <a
                  href=""
                  className="text-sm bg-clip-text text-transparent bg-gradient-to-l to-blue-400 to-100%  from-pink-300 from-10% font-bold"
                >
                  Let's talk
                </a>
              </nav>
            </header>
            <div className="flex flex-col-reverse items-center justify-center w-full md:flex-row">
              <section className="flex flex-col w-full h-auto gap-6 md:w-1/2 ">
                <h3 className="text-sm font-black text-black md:text-xl">
                  Hello I'm Jaedson
                </h3>
                <h1 className="text-zinc-600 text-2xl font-black md:text-4xl">
                  I'm Wed Dev and i make products that people love
                </h1>
                <div className="flex items-center justify-start gap-4">
                  <img src="../public//dribble.svg" alt="" />
                  <img src="../public//ig.svg" alt="" />
                  <img src="../public//Vector (6).svg" alt="" />
                </div>
                <div className="flex gap-3 flex-wrap items-center justify-center md:justify-start">
                  <button className="p-0.5 bg-white shadow-lg shadow-violet-300 rounded-md bg-gradient-to-l to-blue-400 to-100%  from-pink-300 from-10% w-9/12 md:w-auto">
                    <p className="w-full h-full bg-white py-2.5 px-10 rounded-md font-bold text-base text-pink-200">
                      Porfolio
                    </p>
                  </button>
                  <button className="py-3 px-10 bg-white shadow-lg shadow-violet-300 rounded-md bg-gradient-to-l to-blue-400 to-100%  from-pink-300 from-10% text-base font-bold text-white w-9/12 md:w-auto">
                    Let's talk!
                  </button>
                </div>
              </section>
              <section className="flex w-full md:w-1/2 h-auto items-end justify-center sm:flex-col sm:items-center">
                <img
                  src="https://i.pinimg.com/564x/ab/2e/ba/ab2eba60174ebcfb7095c3e26577e79a.jpg"
                  alt=""
                  className="object-cover w-40 h-40 rounded-full md:w-60 md:h-60"
                />
              </section>
            </div>
          </main>
        </section>
      </article>
    </div>
  );
}
