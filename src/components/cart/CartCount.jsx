import { useDispatch } from "react-redux";
import { setClearCartItems } from "../../app/CartSlice";

function CartCount({ onCartToggle, totalQuantity }) {
  const dispatch = useDispatch();

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };
  return (
    <>
      <div className="cart-top">
        <div className="cart-top__left">
          <i onClick={onCartToggle} className="fa-solid fa-chevron-left"></i>
          <p>
            Seu carrinho <span>({totalQuantity} itens)</span>
          </p>
        </div>
        <div className="cart-top__right">
          <i onClick={onClearCartItems} className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </>
  );
}

export default CartCount;
