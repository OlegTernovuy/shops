export interface ICart {
  cartId: number;
  cartImage: string;
  cartName: string;
  oldPrice: string;
  newPrice: string;
}

export interface ICartData {
    carts: ICart[];
}

export interface ICartDataSingle {
    cart: ICart;
}