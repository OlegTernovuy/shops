import Home from "@/Components/screens/home/Home";
import MainBaner from "../../public/MainBaner.svg";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home Shop page",
  description: "Its new ukraine shop",
};

export default function HomePage() {
  
  return (
    <main className="min-h-screen max-w-screen-2xl flex flex-col mx-auto md:px-4">
      <Image
        src={MainBaner}
        alt="baner"
        width={1306}
        height={360}
        // sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw"
        className=" mb-4 object-cover h-[360px] w-screen"
      />
      <Home />
    </main>
  );
}

// export const getServerSideProps: GetServerSideProps<ICartData> = async () => {
//   const carts = await CartServices.getAll()
//   console.log(carts);

//   return {
//     props: {carts}
//   }
// }
