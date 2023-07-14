import emptybag from "../../assets/emptybag.png";

function CartEmpty({ onCartToggle }) {
  return (
    <>
      <div className="empty-div">
        <img src={emptybag} alt="bag-img" />
        <button onClick={onCartToggle} type="button">
          <i className="fa-solid fa-angle-left"></i> Voltar para a loja
        </button>
      </div>
    </>
  );
}

export default CartEmpty;
