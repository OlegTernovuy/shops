import CartItem from "@/Components/screens/home/catItems/CartItem";
import { CartServices } from "@/services/cart.service";

const CartlPage = async ({ params }: { params: { id: string } }) => {
  const cart = await CartServices.getById(params.id);

  return <CartItem cart={cart} />;
};

export default CartlPage;
