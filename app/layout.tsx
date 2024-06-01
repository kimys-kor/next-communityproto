import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/layouts/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import Headers from "./components/layouts/Headers";
import Footer from "./components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "라스고",
  description: "라이브스코어 라이브스포츠 라이브중계",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Headers></Headers>
          <Navbar />
          <Footer></Footer>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
