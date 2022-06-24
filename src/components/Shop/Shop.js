import classes from "./Shop.module.css";
import ShopItem from "./ShopItem/ShopItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faGem, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ShopDetails from "./ShopDetails/ShopDetails";
import PromoItem from "./PromoItem/PromoItem";
import ShopHeader from "./ShopHeader/ShopHeader";
import Loading from "./Loading/Loading";

const Shop = (props) => {
  const gender = useSelector((state) => state.counter.gender);
  const [arrayData, setArrayData] = useState(null);
  const [data, setData] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [catID, setCatID] = useState(0);
  useEffect(() => {
    setArrayData(props.fetchData);
    setData(props.fetchData);
  }, [props.fetchData]);
  const catChangeClothing = () => {
    if (gender) {
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
  const openDetailsItem = (detailID) => {
    setItemDetails((detailID = detailID - 1));
  };
  const closeWindow = (value) => {
    if (value === true) {
      setItemDetails(null);
    }
  };
  const changeState = (value) => {
    if (value && catID === 0) {
      setData(
        arrayData.filter((element) => element.category === "men's clothing")
      );
    } else if (!value && catID === 0) {
      setData(
        arrayData.filter((element) => element.category === "women's clothing")
      );
    }
  };
  return (
    <div className={classes.shopMainWrapper}>
      {(itemDetails || itemDetails === 0) && (
        <ShopDetails
          title={arrayData[itemDetails].title}
          price={arrayData[itemDetails].price}
          img={arrayData[itemDetails].image}
          description={arrayData[itemDetails].description}
          ratingRate={arrayData[itemDetails].rating.rate}
          ratingCount={arrayData[itemDetails].rating.count}
          isWindowClosed={closeWindow}
        />
      )}
      <div className={classes.shopWrapper}>
        <ShopHeader arrayData={arrayData} changeState={changeState} />
        <PromoItem />
        <div className={classes.shopItemsWrapper}>
          <div className={classes.shopCategory}>
            <ul>
              <li onClick={catChangeClothing}>
                <FontAwesomeIcon icon={faShirt} />
                <p>Clothing</p>
              </li>
              <li onClick={catChangeJewelery}>
                <FontAwesomeIcon icon={faGem} />
                <p>Jewelery</p>
              </li>
              <li onClick={catChangeElectronics}>
                <FontAwesomeIcon icon={faLaptop} />
                <p>Electronics</p>
              </li>
            </ul>
          </div>
          <div className={classes.shopItems}>
            {props.catchError?<p>{props.catchError}</p>:(!data ? (
              <Loading />
            ) : (
              data.map((element) => (
                <ShopItem
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  price={element.price}
                  img={element.image}
                  detailID={openDetailsItem}
                />
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
