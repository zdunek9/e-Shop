import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { counterActions } from "../../StoreLogic";
import CardItem from "./CardItem/CardItem";
const Cart = () => {
  const dispatch = useDispatch();
  const showItems = useSelector((state) => state.counter.items);
  const showAmount = useSelector((state) => state.counter.totalAmount);
  const hideCardBTN = () => {
    dispatch(counterActions.changeShowCard());
  };
  return (
    <div className={classes.cartWrapper}>
      <div className={classes.cartCenterWrapper}>
        <FontAwesomeIcon
          icon={faX}
          onClick={hideCardBTN}
          className={classes.FontAwesomeIconX}
        />
        <p className={classes.yourCardTitle}>Your Cart:</p>
        <div className={classes.cartItems}>Cart Items</div>
        <ul className={classes.cartListUl}>
          {showItems.map((item) => (
            <CardItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
              totalPrice={item.totalPrice}
            />
          ))}
        </ul>
        <p className={classes.cartTotalQuantity}>Total Quantity: {showAmount.toFixed(2)}$</p>
      </div>
    </div>
  );
};

export default Cart;
