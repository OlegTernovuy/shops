import CartItem from "./CartItem";
import Link from "next/link";
import { ICart } from "@/interfaces/cart.interface";
import { CartServices } from "@/services/cart.service";
import { Suspense } from "react";
import Loading from "@/Components/ui/Loading";

// export const cartData = [
//   {
//     cartId: 1,
//     cartImage: cartImage,
//     cartName: "Дуже довга назва товару з якимись цифрами HTG-7658",
//     oldPrice: "28 534",
//     newPrice: "19 999",
//   },
//   {
//     cartId: 2,
//     cartImage: cartImage,
//     cartName: "Дуже довга назва товару з якимись цифрами HTG-7658",
//     oldPrice: "68 999",
//     newPrice: "19 999",
//   },
//   {
//     cartId: 3,
//     cartImage: cartImage,
//     cartName: "Дуже довга назва товару з якимись цифрами HTG-7658",
//     oldPrice: "78 999",
//     newPrice: "29 999",
//   },
//   {
//     cartId: 4,
//     cartImage: cartImage,
//     cartName: "Дуже довга назва товару з якимись цифрами HTG-7658",
//     oldPrice: "38 999",
//     newPrice: "19 999",
//   },
//   {
//     cartId: 5,
//     cartImage: cartImage,
//     cartName: "Дуже довга назва товару з якимись цифрами HTG-7658",
//     oldPrice: "88 999",
//     newPrice: "69 999",
//   },
//   {
//     cartId: 6,
//     cartImage: cartImage,
//     cartName: "Дуже довга назва товару з якимись цифрами HTG-7658",
//     oldPrice: "28 999",
//     newPrice: "19 999",
//   },
//   {
//     cartId: 8,
//     cartImage: cartImage,
//     cartName: "Дуже довга назва товару з якимись цифрами HTG-7658",
//     oldPrice: "28 999",
//     newPrice: "19 999",
//   },
// ];

interface ISCartData {
  cart: ICart;
  index: number;
}

const CartItems = async () => {
  const carts = await CartServices.getAll();
  // console.log(carts);

  return (
    <div className="grid xs:grid-cols-[repeat(auto-fit,minmax(171px,auto))] md:grid-cols-[repeat(auto-fit,minmax(200px,auto))] justify-center mt-4 mb-8 gap-4">
      {carts?.length > 0 ? (
        carts.map((cart: ICart, index: number) => {

          return (
              <Link href={`/cart/${cart.cartId}`}>
                <CartItem cart={cart} cartDataLength={carts.length} />
              </Link>
          );
        })
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<ICartData> = async () => {
//   const carts = await CartServices.getAll()
//   console.log(carts);

//   return {
//     props: {carts}
//   }
// }

export default CartItems;
