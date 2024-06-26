import { Inter } from "next/font/google";
import "./globals.css";

import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import Headers from "./components/layouts/Headers";
import Footer from "./components/layouts/Footer";
import Container from "./components/Container";
import Navbar from "./components/layouts/Navbar";
import ScrollButtons from "./components/ScrollButtons";
import Login from "./components/login/Login";
import Card from "./components/Card";
import IconTabs from "./components/sportRank/IconTabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "먹튀타파",
  description: "라이브스코어 라이브스포츠 라이브중계",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Headers></Headers>

          <div className="pt-24 min-h-[100vh]">
            <Navbar></Navbar>

            <Container>
              <aside className="md:w-1/4 hidden md:flex flex-col gap-8 max-w-[300px] h-full  ">
                <Login></Login>
                <Card title={"주간베스트"}></Card>
                <Card title={"실시간베스트"}></Card>
                <IconTabs></IconTabs>
              </aside>
              <div className="w-full md:w-3/4">{children}</div>
            </Container>
          </div>
          <Footer></Footer>
        </main>

        <ScrollButtons />
      </body>
    </html>
  );
}
