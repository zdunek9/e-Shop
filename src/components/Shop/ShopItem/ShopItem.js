import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../StoreLogic";
import classes from "./ShopItem.module.css";
const ShopItem = (props) => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.counter.items);
  let findItem = 1;
  const addItem = () => {
    dispatch(
      counterActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );


  };
  findItem = itemList.find((item) => item.id === props.id);
  console.log(findItem);
  return (
    <div className={classes.shopItemWrapper}>
      <img src={props.img} alt="itemPhoto" className={classes.imgShopItem} />
      <p className={classes.titleShopItem}>{props.title}</p>
      <p className={classes.priceShopItem}>{props.price}$</p>
        <button
        className={`${
          findItem && (findItem.amount<findItem.availability
            ? classes.addItemButton
            : classes.addItemButtonFullCart)
        }`}
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
};
export default ShopItem;
