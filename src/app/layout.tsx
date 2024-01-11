import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ShoppingCartModal from "@/Components/ui/Modal/ShoppingCartModal";
import CatalogModal from "@/Components/ui/Modal/Catalog/CatalogModal";
import Modal from "@/Components/ui/Modal/Modal";
import ModalInfo from "@/Components/ui/Modal/ModalInfo";
import Navbar from "@/Components/layout/header/Navbar";
import Footer from "@/Components/layout/footer/Footer";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Shop",
  description: "Its new ukraine shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <ShoppingCartModal />
        <CatalogModal />
        <Modal title="lorem2" search="element">
          <ModalInfo />
        </Modal>
        <Footer />
      </body>
    </html>
  );
}
