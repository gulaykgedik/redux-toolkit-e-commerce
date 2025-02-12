import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();

  const { carts, totalAmout, itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const basketTotalAmount = () => {
    const total = carts.reduce((accumulator, cart) => {
      return accumulator + cart.price;
    }, 0);

    return total.toFixed(2, 0);
  };

  return (
    <div className="w-10/12 m-auto">
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart) => (
            <CartComp key={cart.id} cart={cart} />
          ))}

          <div className="flex items-center justify-end text-2xl ">
            Sepetinizde <strong className="mx-1">{itemCount}</strong> adet ürün
            var.
          </div>
          <div className="flex items-center justify-end text-2xl mt-2">
            TOPLAM TUTAR:
            <span className="font-bold text-3xl ml-2">
              {basketTotalAmount()} TL
            </span>
          </div>
        </div>
      ) : (
        <div className="text-xl font-semibold text-red-400 text-center mt-10">
          Kartınız boş...
        </div>
      )}
    </div>
  );
};

export default Cart;
