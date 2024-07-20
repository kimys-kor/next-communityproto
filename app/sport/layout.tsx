import Notice from "../components/cards/Notice";
import Container from "../components/Container";
import Login from "../components/login/Login";
import IconTabs from "../components/sportRank/IconTabs";
import Mttp from "../guide/(components)/Mttp";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Mttp></Mttp>
      <div className="max-w-[1300px] px-3 mx-auto flex gap-5 mt-5">
        <aside className="md:w-1/4 hidden md:flex flex-col gap-8 max-w-[300px] h-full">
          <Login></Login>
          <Notice></Notice>
          <IconTabs></IconTabs>
        </aside>
        <section className="w-full md:w-3/4">{children}</section>
      </div>
    </div>
  );
}
