"use client";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardFilled from "@mui/icons-material/ArrowForward";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { CatalogItem } from "./Catalog.data";
import Image from "next/image";
import Link from "next/link";
import CatalogItems from "./CatalogItems";

const CatalogModal = () => {
  const searchParams = useSearchParams();
  const catalog = searchParams.get("catalog");
  const router = useRouter();
  return (
    catalog && (
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, scale: 1 }}
        className="fixed inset-0 bg-white overflow-y-auto h-full w-full md:max-w-[960px] md:h-min md:max-h-[760px] m-auto md:rounded-lg flex flex-col text-DeWiseBlack divide-y divide-slate-300"
      >
        <div className="flex justify-between p-4">
          <h3 className="text-Headline5">Каталог товарів</h3>
          <button onClick={router.back}>
            <CloseIcon fontSize="medium" />
          </button>
        </div>
        <div className="flex flex-col pt-4">
          {CatalogItem ? (
            CatalogItem.map((item) => {
              return (
                <Link href="/basket" key={item.title}>
                  <div className="flex justify-between text-base py-3 px-4 hover:bg-tifanyHover" key={item.title}>
                    <div className="flex">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                      <p className="pl-8">{item.title}</p>
                    </div>
                    <ArrowForwardFilled/>
                  </div>
                </Link>
              );
            })
          ) : (
            <div>Not found</div>
          )}
          {/* <CatalogItems children={<ArrowForwardFilled sx={{position: 'absolute', right: '16px'}}/>}/> */}
        </div>
      </motion.div>
    )
  );
};

export default CatalogModal;
