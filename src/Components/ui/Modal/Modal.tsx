"use client";

import CloseIcon from "@mui/icons-material/Close";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

interface IModal {
  children: React.ReactNode;
  title: string;
  search: string;
}

export default function Modal({ children, title, search }: IModal) {
  const searchParams = useSearchParams();
  const show = searchParams.get(search);

  const router = useRouter();
  return (
    show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.3}}
          exit={{ opacity: 0, scale: 1 }}
                    className="fixed inset-0 bg-white overflow-y-auto h-full w-full flex flex-col divide-y divide-slate-300"
        >
          {/* <div
            className="fixed inset-0 bg-white overflow-y-auto h-full w-full flex flex-col divide-y divide-slate-300"
          > */}
            <div className="flex justify-between p-4">
              <h3>{title}</h3>
              <button onClick={router.back}>
                <CloseIcon fontSize="medium" />
              </button>
            </div>
            <div className="flex flex-col gap-3 p-4">{children}</div>
          {/* </div> */}
        </motion.div>
    )
  );
}
