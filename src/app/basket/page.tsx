import Link from "next/link";
import { ICart } from "@/interfaces/cart.interface";
import { CartServices } from "@/services/cart.service";
import { Suspense } from "react";
import Loading from "@/Components/ui/Loading";
import CartItem from "@/Components/screens/home/catItems/CartItem";


const Basket = async () => {
  const carts = await CartServices.getAll();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,auto))] gap-4 justify-center mt-4 mb-8">
      {carts?.length > 0 ? (
        carts.map((cart: ICart) => {
          return (
            <Suspense fallback={<Loading/>}>
              <Link href={`/cart/${cart.cartId}`} key={cart.cartId}>
                <CartItem cart={cart} cartDataLength={carts.length} />
              </Link>
            </Suspense>
          );
        })
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};


export default Basket;
