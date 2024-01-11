"use client";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import menuIcon from "../../../../public/MenuFilled.svg";
import navLogo from "../../../../public/navLogo.svg";

import SearchField from "./SearchField";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "@/Components/ui/mobileMenu/MobileMenu";

import { usePathname } from "next/navigation";
import MainButton from "@/Components/ui/MainButton/MainButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const pathname = usePathname();

  return (
    <header className="bg-[#262626]">
      <div className="flex justify-between gap-6 items-center px-4 py-2 mx-auto max-w-screen-2xl">
      <button onClick={handleNav}>
        <MenuIcon
          sx={{
            width: 48,
            height: 48,
            color: "#ffffff",
          }}
        />
      </button>
      <Link href="/">
        <Image
          src={navLogo}
          alt="logo"
          width={30}
          height={32}
          className="max-w-[30px] "
        />
      </Link>
      <Link href={`${pathname}?catalog=true`} className="xs:hidden md:flex">
          <MainButton/>
        </Link>
      <SearchField />
      <Link href={`${pathname}?shopCart=true`}>
        <ShoppingCartOutlinedIcon fontSize="large" className="text-white" />
      </Link>
      <MobileMenu nav={nav} handleNav={handleNav} />
      </div>
    </header>
  );
};

export default Navbar;
