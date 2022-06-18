import classes from "./ShopHeader.module.css";
import ShopInput from "./ShopInput/ShopInput";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { counterActions } from "../../../StoreLogic";
import { useState } from "react";
const ShopHeader = (props) => {
  const dispatch = useDispatch();
  const showTotalQuantity = useSelector((state) => state.counter.totalQuantity);
  const gender = useSelector((state) => state.counter.gender);

  const showCardBTN = () => {
    dispatch(counterActions.changeShowCard());
  };
  const genderChangeMen = () => {
    dispatch(counterActions.changeGender(true));
    props.changeState(true);
  };
  const genderChangeWomen = () => {
    dispatch(counterActions.changeGender(false));
    props.changeState(false);
  };

  let [showInfo1, setShowInfo1] = useState(false);
  const hideInput = () => {
    setShowInfo1(true);
  };
  return (
    <div className={classes.headerShopWrapper}>
      <div>
        <Link to="/">
          <p className={classes.titleHeaderShopWrapper}>smartwatch</p>
        </Link>
      </div>
      <div>
        <button
          onClick={genderChangeMen}
          className={`${gender ? classes.isActiveButton : classes.notActive}`}
        >
          Men
        </button>
        <button
          onClick={genderChangeWomen}
          className={`${gender ? classes.notActive : classes.isActiveButton}`}
        >
          Women
        </button>
      </div>
      <div className={classes.inputShopWrapper}>
        <ShopInput
          hideInput={hideInput}
          arrayData={props.arrayData}
          show={showInfo1}
          onClickOutside={() => {
            setShowInfo1(false);
          }}
        />
        <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} onClick={hideInput}/>
      </div>
      <div className={classes.loginShopWrapper}>
        <button className={classes.loginBTN}>Login</button>
        <div className={classes.counterWrapper}>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={classes.FontAwesomeIcon}
            onClick={showCardBTN}
          />
          <p className={classes.shoppingCardCounter}>{showTotalQuantity}</p>
        </div>
      </div>
    </div>
  );
};
export default ShopHeader;
