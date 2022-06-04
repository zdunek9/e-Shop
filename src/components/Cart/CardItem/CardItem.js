import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { counterActions } from "../../../StoreLogic";
import classes from "./CardItem.module.css";
const CardItem = (props) => {
  const dispatch = useDispatch();
  const removeItemInCard = () => {
    dispatch(counterActions.removeItem(props.id));
  };
  const addItemInCard = () => {
    dispatch(
      counterActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };
  return (
    <li key={props.id} className={classes.cardLi}>
      {props.amount === props.availability && (
        <div className={classes.itemMax}>MAX</div>
      )}
      <div className={classes.fontWrapperCard}>
        <FontAwesomeIcon
          icon={faMinus}
          className={classes.icon}
          onClick={removeItemInCard}
        />
        <FontAwesomeIcon
          icon={faPlus}
          className={`${
            props.amount === props.availability
              ? classes.iconNotavailable
              : classes.icon
          }`}
          onClick={addItemInCard}
        />
      </div>
      <p>{props.title}</p>
      <div className={classes.cartListAmountWrapper}>
        {` x${props.amount}`} {`= ${props.totalPrice.toFixed(2)}$`}
      </div>
    </li>
  );
};
export default CardItem;
// className={`${
//   findItem &&
//   !(findItem.amount < findItem.availability) &&
//   classes.addItemButtonFullCart
// }`}
