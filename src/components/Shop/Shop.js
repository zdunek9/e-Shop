import classes from "./Shop.module.css";
import ShopItem from "./ShopItem/ShopItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faGem, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ShopDetails from "./ShopDetails/ShopDetails";
import Loading from "./Loading/Loading";
import PromoItem from "./PromoItem/PromoItem";
import ShopHeader from "./ShopHeader/ShopHeader";

const Shop = () => {
  const gender = useSelector((state) => state.counter.gender);
  const [arrayData, setArrayData] = useState(null);
  const [data, setData] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
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
    if (gender) {
      setData(
        arrayData.filter((element) => element.category === "men's clothing")
      );
    } else {
      setData(
        arrayData.filter((element) => element.category === "women's clothing")
      );
    }
  };
  const catChangeJewelery = () => {
    setData(arrayData.filter((element) => element.category === "jewelery"));
  };
  const catChangeElectronics = () => {
    setData(arrayData.filter((element) => element.category === "electronics"));
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
    
    if (value) {
      setData(
        arrayData.filter((element) => element.category === "men's clothing")
      );
    } else {
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
            {!data && <Loading />}
            {data &&
              data.map((element) => (
                <ShopItem
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  price={element.price}
                  img={element.image}
                  detailID={openDetailsItem}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
