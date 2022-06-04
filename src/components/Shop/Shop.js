import classes from "./Shop.module.css";
import ShopItem from "./ShopItem/ShopItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faGem,
  faLaptop,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { counterActions } from "../../StoreLogic";
import { Link } from "react-router-dom";
import headphones from "../Img/headphones.jpg";
import ShopInput from "./ShopInput/ShopInput";

const Shop = () => {
  const showTotalQuantity = useSelector((state) => state.counter.totalQuantity);
  const dispatch = useDispatch();
  const showCardBTN = () => {
    dispatch(counterActions.changeShowCard());
  };
  const [data, setData] = useState(null);
  const [arrayData, setArrayData] = useState(null);
  const [changeGender, setChangeGender] = useState(true);
  const [catID, setCatID] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Could not fetch data");
    }
    const tempArray = await response.json();
    setData(tempArray);
    setArrayData(tempArray);
  };

  const catChangeClothing = () => {
    if (changeGender) {
      setData(
        arrayData.filter((element) => element.category === "men's clothing")
      );
    } else {
      setData(
        arrayData.filter((element) => element.category === "women's clothing")
      );
    }
    setCatID(0);
  };
  const catChangeJewelery = () => {
    setData(arrayData.filter((element) => element.category === "jewelery"));
    setCatID(1);
  };
  const catChangeElectronics = () => {
    setData(arrayData.filter((element) => element.category === "electronics"));
    setCatID(2);
  };
  const genderChangeMen = () => {
    setChangeGender(true);
    if (catID === 0) {
      setData(
        arrayData.filter((element) => element.category === "men's clothing")
      );
    }
  };
  const genderChangeWomen = () => {
    setChangeGender(false);
    if (catID === 0) {
      setData(
        arrayData.filter((element) => element.category === "women's clothing")
      );
    }
  };

  return (
    <div className={classes.shopWrapper}>
      <div className={classes.headerShopWrapper}>
        <div>
          <Link to="/">
            <p className={classes.titleHeaderShopWrapper}>smartwatch</p>
          </Link>
        </div>
        <div>
          <button
            onClick={genderChangeMen}
            className={`${
              changeGender ? classes.isActiveButton : classes.notActive
            }`}
          >
            Men
          </button>
          <button
            onClick={genderChangeWomen}
            className={`${
              changeGender ? classes.notActive : classes.isActiveButton
            }`}
          >
            Women
          </button>
        </div>
        <div className={classes.inputShopWrapper}>
          <ShopInput arrayData={arrayData} />
          <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
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
      <div className={classes.promoShopWrapper}>
        <img
          src={headphones}
          className={classes.headphonesShop}
          alt="New Kopthóres Events"
        />
        <div className={classes.titlePromoShopWrapper}>
          <h1>New Kopthóres Events</h1>
          <h2>available soon</h2>
        </div>
      </div>
      <div className={classes.shopItemsWrapper}>
        <div className={classes.shopCategory}>
          <ul>
            <li onClick={catChangeClothing}>
              <FontAwesomeIcon icon={faShirt} className={classes.iconShop} />
              <p>Clothing</p>
            </li>
            <li onClick={catChangeJewelery}>
              <FontAwesomeIcon icon={faGem} className={classes.iconShop} />
              <p>Jewelery</p>
            </li>
            <li onClick={catChangeElectronics}>
              <FontAwesomeIcon icon={faLaptop} className={classes.iconShop} />
              <p>Electronics</p>
            </li>
          </ul>
        </div>
        <div className={classes.shopItems}>
          {data &&
            data.map((element) => (
              <ShopItem
                key={element.id}
                id={element.id}
                title={element.title}
                price={element.price}
                img={element.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
