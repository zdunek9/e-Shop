import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../StoreLogic";
import classes from "./ShopItem.module.css";
const ShopItem = (props) => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.counter.items);
  const [clickBTN, setClickBTN] = useState(false);
  const addItem = () => {
    dispatch(
      counterActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
    setClickBTN(true);
  };
  const findItem = itemList.find((item) => item.id === props.id);
  const openDetailsFunc = () => {
    props.detailID(props.id);
  };
  const timeFunc = () => {
    setTimeout(() => setClickBTN(false), 200);
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
        } ${clickBTN ? classes.clickedButton : ""}`}
        onClick={addItem}
      >
        Add
      </button>
      {findItem && findItem.amount < findItem.availability && timeFunc()}
    </div>
  );
};
export default ShopItem;
