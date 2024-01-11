"use client";

import Link from "next/link";
import CatalogItems from "../Modal/Catalog/CatalogItems";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


interface IOpenCatalog {
  catalog: boolean;
  handleCatalog: () => void;
  closeAll: () => void;
}

const MobileCatalog = ({ catalog, handleCatalog, closeAll }: IOpenCatalog) => {
  return (
    <div
      className={
        catalog
          ? "fixed left-0 top-0 w-10/12 md:w-96  h-full bg-white text-DeWiseBlack ease-in-out duration-700 z-10 overflow-y-scroll divide-y divide-slate-300"
          : "fixed left-[-100%] top-0  w-10/12 md:w-96  h-full z-10 ease-in duration-700"
      }
    >
      <div className="flex px-4 py-3">
        <button onClick={handleCatalog}>
          <ArrowBackIcon fontSize="medium" />
        </button>
        <p className="pl-8">Каталог товарів</p>
      </div>
      <div className="flex flex-col">
        <CatalogItems closeAll={closeAll}>
          <span className="text-xs pl-2 text-deWiseBlackSecondary">(436)</span>
        </CatalogItems>
      </div>
    </div>
  );
};

export default MobileCatalog;
