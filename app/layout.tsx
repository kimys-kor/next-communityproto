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

          <div className="pt-24">
            <Navbar></Navbar>

            <Container>
              <aside className="hidden md:block max-w-[300px] h-full flex-col gap-4">
                <Login></Login>
                <Card title={"주간베스트"}></Card>
                <Card title={"실시간베스트"}></Card>
                <IconTabs></IconTabs>
              </aside>
              {children}
            </Container>
          </div>
          <Footer></Footer>
        </main>

        <ScrollButtons />
      </body>
    </html>
  );
}
