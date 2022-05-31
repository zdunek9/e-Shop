import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import image_watch from "../Img/ew.png";
import { useDispatch } from "react-redux";
import { counterActions } from "../../StoreLogic";
const Header = () => {
  const dispatch = useDispatch();
  const showCardBTN = () =>{
    dispatch(counterActions.changeShowCard())
  }
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerTopBar}>
        <div>
          <p className={classes.headerTopBarName}>smartwatch</p>
        </div>
        <div>
          <p>Home</p>
          <p>about</p>
          <p>shop</p>
          <p>contact</p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faCartShopping} onClick={showCardBTN}/>
          </p>
        </div>
      </div>
      <div className={classes.headerMainPage}>
        <img
          src={image_watch}
          className={classes.imageWatch}
          alt="smartwatch"
        />
        <div className={classes.tittleHeader}>
          <h1>smartwatch</h1>
          <h1>Series 6</h1>
          <p>Avaliable now</p>
          <button>Shop Now</button>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
