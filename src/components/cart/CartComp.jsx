import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-10 flex items-center justify-between ">
      <img
        className="w-[200px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl ">{cart?.title}</div>
        <div>{cart?.description}</div>
        <div className="font-bold text-2xl">{cart?.price} tl</div>
        <div
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="bg-red-500 text-white w-[150px] text-xl mt-4 h-12 flex items-center justify-center cursor-pointer rounded-md "
        >
          Ürünü Sil
        </div>
      </div>
    </div>
  );
};

export default CartComp;
