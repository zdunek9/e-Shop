import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../StoreLogic";
import classes from "./ShopItem.module.css";
const ShopItem = (props) => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.counter.items);
  const addItem = () => {
    dispatch(
      counterActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };
  const findItem = itemList.find((item) => item.id === props.id);
  const openDetailsFunc = () => {
    props.detailID(props.id);
  };
  return (
    <div className={classes.shopItemWrapper}>
      <div className={classes.shopItemWrapperUpSide} onClick={openDetailsFunc}>
        <img src={props.img} alt="itemPhoto" className={classes.imgShopItem} />
        <p className={classes.titleShopItem}>{props.title}</p>
        <p className={classes.priceShopItem}>{props.price}$</p>
      </div>
      <button
        className={`${
          findItem &&
          !(findItem.amount < findItem.availability) &&
          classes.addItemButtonFullCart
        }`}
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
};
export default ShopItem;
