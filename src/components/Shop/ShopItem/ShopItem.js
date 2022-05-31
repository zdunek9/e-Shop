import { useDispatch } from "react-redux";
import { counterActions } from "../../../StoreLogic";
import classes from "./ShopItem.module.css";
const ShopItem = (props) => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(counterActions.addItem({
      id:props.id,
      title:props.title,
      price:props.price
    }));
  };
  return (
    <div className={classes.shopItemWrapper}>
      <img src={props.img} alt="itemPhoto" className={classes.imgShopItem} />
      <p className={classes.titleShopItem}>{props.title}</p>
      <p className={classes.priceShopItem}>{props.price}$</p>
      <button className={classes.addItemButton} onClick={addItem}>
        Add
      </button>
    </div>
  );
};
export default ShopItem;
