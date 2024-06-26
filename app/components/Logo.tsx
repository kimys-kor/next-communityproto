import Image from "next/image";

const Logo = () => {
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
