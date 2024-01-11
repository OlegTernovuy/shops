"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartEmpty from "../../../../public/shoppingCardEmpty.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const ShoppingCartModal = () => {
  const searchParam = useSearchParams();
  const shopCart = searchParam.get("shopCart");

  const router = useRouter();
  return (
    shopCart && (
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, scale: 1 }}
        className="fixed inset-0 bg-white overflow-y-auto h-full w-full md:max-w-[960px] md:h-[560px] m-auto md:rounded-lg flex flex-col text-DeWiseBlack divide-y divide-slate-300"
      >
        <div className="flex justify-between p-4">
          <h3 className="text-Headline5">Кошик</h3>
          <button onClick={router.back}>
            <CloseIcon fontSize="medium" />
          </button>
        </div>
        <div className="flex flex-col pt-16 items-center text-center">
          <Image src={ShoppingCartEmpty} alt="ShoppingCartEmpty" />
          <span>
            <h2 className="text-Headline5 pt-8 pb-1">Кошик порожній</h2>
            <p className="text-base">Вперед до покупок :)</p>
          </span>
        </div>
      </motion.div>
    )
  );
};

export default ShoppingCartModal;
