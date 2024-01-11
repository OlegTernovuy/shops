import Link from "next/link";
import { CatalogItem } from "./Catalog.data";
import Image from "next/image";

interface ICatalogItems {
    children: React.ReactNode;
    closeAll?: () => void;
  }

const CatalogItems = ({ children, closeAll }: ICatalogItems) => {
  return (
    <>
      {CatalogItem ? (
        CatalogItem.map((item) => {
          return (
            <Link href="/basket" key={item.title} onClick={closeAll}>
              <div
                className="flex text-base py-3 px-4 hover:bg-tifanyHover"
                key={item.title}
              >
                <div className="flex items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                  <p className="pl-8">{item.title}</p>
                  {children}
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div>Not found</div>
      )}
    </>
  );
};

export default CatalogItems;
