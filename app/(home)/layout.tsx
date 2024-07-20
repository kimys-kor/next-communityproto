import Image from "next/image";
import Notice from "../components/cards/Notice";
import Container from "../components/Container";
import Login from "../components/login/Login";
import IconTabs from "../components/sportRank/IconTabs";
import side1 from "/public/images/side1.png";
import side2 from "/public/images/side2.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        <aside className="md:w-1/4 hidden md:flex flex-col gap-10 max-w-[300px] h-full">
          <Login></Login>
          <Notice></Notice>
          <IconTabs></IconTabs>
        </aside>
        <section className="w-full md:w-3/4">{children}</section>
        <aside className="absolute top-0 right-[-150px] hidden xxl:flex flex-col gap-2 max-w-[150px]">
          <Image
            width={150}
            height={400}
            src={side1}
            alt={"content post Date Icon"}
          />
          <Image
            width={150}
            height={400}
            src={side2}
            alt={"content post Date Icon"}
          />
        </aside>
      </Container>
    </>
  );
}
