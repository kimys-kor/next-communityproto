import { Inter } from "next/font/google";
import "./globals.css";

import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import Headers from "./components/layouts/Headers";
import Footer from "./components/layouts/Footer";
import Container from "./components/Container";
import Navbar from "./components/layouts/Navbar";

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
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Headers></Headers>
          <Footer></Footer>
        </ClientOnly>
        <div className="pt-20">
          <Navbar></Navbar>
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
