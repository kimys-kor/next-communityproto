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
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "먹튀타파",
  description: "라이브스코어 라이브스포츠 라이브중계",
};

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
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
                <Card title={"공지"}></Card>
                <IconTabs></IconTabs>
              </aside>
              <section className="w-full md:w-3/4">{children}</section>
            </Container>
          </div>
          <Footer></Footer>
        </main>

        <ScrollButtons />
      </body>
    </html>
  );
}
