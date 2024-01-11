import Image from "next/image";
import { Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import priceCart from "../../../../../public/priceCart.svg";
import { ICart, ICartDataSingle } from "@/interfaces/cart.interface";

interface ISingleCartData {
  cart: ICart;
  cartDataLength?: number;
}

const CartItem = ({ cart, cartDataLength }: ISingleCartData) => {  
  return (
    <div
      // className={
      //   cart.cartId <= 2 && cart.cartId % 2 !== 0 //1
      //     ? "pt-0 border-b border-r pr-2 pb-2 border-slate-300"
      //     : cart.cartId % 2 !== 0 && cart.cartId <= cartDataLength - 2 //3, 5, 7
      //     ? "border-r border-b pr-2 py-2 border-slate-300"
      //     : cart.cartId <= 2 && cart.cartId % 2 === 0 ? //2
      //     "pt-0 border-b pl-2 pb-2 border-slate-300" :
      //     cart.cartId > cartDataLength - 2 && cart.cartId % 2 === 0 && cartDataLength % 2 === 0 ?//last item
      //     'pt-2 pl-2 border-b-0 border-slate-300' :
      //     cart.cartId > cartDataLength - 2 && cart.cartId % 2 !== 0 ? //before the last item
      //     'pt-2 pr-2 border-r border-slate-300' :
      //     'border-b pl-2 py-2 border-slate-300' //4, 6, 8
      // }
      className="text-black"
    >
      <Image
        src={cart.cartImage}
        alt="cartImage"
        height={260}
        width={170}
        className="w-full min-h-[260px]"
      />
      <p className="py-1 text-xs">{cart.cartName}</p>
      <Rating name="read-only" value={2.5} precision={0.5} readOnly />
      <div className="flex justify-between mt-2 items-center">
        <div className="flex flex-col">
          <span className="text-[10px] line-through">{cart.oldPrice}</span>
          <span className="text-redPrice text-sm">{cart.newPrice}</span>
        </div>
        <div className="flex space-x-2.5">
          <Image src={priceCart} alt="priceCart" width={32} height={32} />
          <ShoppingCartOutlinedIcon
            sx={{
              width: 32,
              height: 32,
              color: "#04C2C2",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
