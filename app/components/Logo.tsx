"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="cursor-pointer"
      height="130"
      width="130"
      src="/images/logo.png"
    ></Image>
  );
};

export default Logo;
