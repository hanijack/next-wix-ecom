import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Header = () => {
  return (
    <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* mobilescreen */}
      <div className="h-full flex items-center  justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">MADA</div>
        </Link>
        <Menu />
      </div>
      {/* medium screens */}
      <div className="hidden md:flex h-full items-center justify-between gap-8 ">
        <div className="w-1/3 xl:w-1/2 flex justify-between gap-2 ">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-xl tracking-wide">MADA</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="">About</Link>
            <Link href="">Shop</Link>
            <Link href="">Deals</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex justify-between gap-8 flex-1">
        <SearchBar />
        <NavIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;
