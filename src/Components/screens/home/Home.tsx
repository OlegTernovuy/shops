
import MainButton from "@/Components/ui/MainButton/MainButton";
import CartItems from "./catItems/CartItems";
import Link from "next/link";

const Home = () => {

  return (
    <section className=" md:px-0 px-4">
        <Link href="/?catalog=true" className="md:hidden">
          <MainButton/>
        </Link>
      <CartItems />
    </section>
  );
};

export default Home;
