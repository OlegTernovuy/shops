"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/logo-footer.svg";

import CloseIcon from "@mui/icons-material/Close";
import {
  mobileMenuInfo,
  mobileMenuLinkInfo,
  mobileMenuSocialMedia,
} from "./mobileMenu.data";
import { useState } from "react";
import MobileCatalog from "./MobileCatalog";

interface navigation {
  nav: boolean;
  handleNav: () => void;
}

const MobileMenu = ({ nav, handleNav }: navigation) => {
  // const [catalog, setCatalog] = useState(false);

  // const handleCatalog = () => {
  //   setCatalog(!catalog);
  // };

  // const closeAll = () => {
  //   handleNav();
  //   handleCatalog();
  // };
  return (
    <>
      <nav
        className={
          nav
            ? "fixed left-0 top-0 w-10/12 md:w-96 h-full bg-white text-DeWiseBlack ease-in-out duration-700 z-10 overflow-y-scroll"
            : "fixed left-[-100%] top-0 w-10/12 md:w-96 h-full z-10 bg-white ease-in duration-700 "
            // : 'hidden'
        }
      >
        <div className="flex justify-between bg-DeWiseBlack px-4 pt-[11px] pb-[13px]">
          <Link href='/' onClick={handleNav}>
            <Image
              src={logo}
              alt="Logo"
              width={109}
              height={40}
              className="h-[40px]"
            />
          </Link>
          <button onClick={handleNav}>
            <CloseIcon fontSize="medium" className="text-white" />
          </button>
        </div>
        <div className=" text-DeWiseBlack text-base">
        <ul className="flex flex-col uppercase">
            {mobileMenuLinkInfo.length > 0 ? (
              mobileMenuLinkInfo.map((item) => {
                return (
                  <li
                    key={item.title}
                    className="py-3 pl-4 hover:bg-tifanyHover"
                    onClick={handleNav}
                  >
                    <Link href={item.href} className="flex">
                      <Image
                        src={item.imageSrc}
                        alt="buttonIcon"
                        width={24}
                        height={24}
                        className="mr-8"
                      />
                      {item.title}
                    </Link>
                  </li>
                );
              })
            ) : (
              <div>No Data</div>
            )}
          </ul>
          <hr className="my-2 text-slate-300" />
          <ul className="flex flex-col uppercase ">
            {mobileMenuInfo.length > 0 ? (
              mobileMenuInfo.map((item) => {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="py-3 pl-4 hover:bg-tifanyHover"
                  >
                    {item.title}
                  </Link>
                );
              })
            ) : (
              <div>No Data</div>
            )}
          </ul>
          <hr className="my-2 text-slate-300" />
          <ul>
            <p className="pl-4 mt-6 mb-4">Ми в соціальних мережах:</p>
            <div className="flex text-tifany pl-4 gap-6">
              {mobileMenuSocialMedia.length > 0 ? (
                mobileMenuSocialMedia.map((item: any) => {
                  return (
                    <Link href={item?.href} target="_blank" key={item.href}>
                      <Image
                        src={item.imageSrc}
                        alt="Logo"
                        width={32}
                        height={32}
                      />
                    </Link>
                  );
                })
              ) : (
                <div>No Data</div>
              )}
            </div>
          </ul>
        </div>
      </nav>
      <div
        className={
          nav
            ? "fixed top-0 left-0 bg-black bg-opacity-50 h-screen w-full ease-linear duration-300"
            : "fixed top-0 left-[-100%] bg-black bg-opacity-50 h-screen w-full opacity-0 ease-linear duration-500"
            // : "hidden"
        }
        style={{ zIndex: 1 }}
        // onClick={catalog ? closeAll : handleNav}
        onClick={handleNav}

      ></div>
      {/* <MobileCatalog
        catalog={catalog}
        handleCatalog={handleCatalog}
        closeAll={closeAll}
      /> */}
    </>
  );
};

export default MobileMenu;
