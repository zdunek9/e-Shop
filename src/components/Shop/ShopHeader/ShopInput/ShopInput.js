import { useState } from "react";
import classes from "./ShopInput.module.css";
import ShopDetails from "../../ShopDetails/ShopDetails";
const ShopInput = (props) => {
  const [filtredArray, setFiltredArray] = useState([]);
  const [closeInput, setCloseInput] = useState(true);
  const [itemDetails, setItemDetails] = useState(null);

  const array = props.arrayData;
  const findItem = (e) => {
    const searchArray = array.map((el) => ({
      title: el.title,
      img: el.image,
      id: el.id,
    }));
    const searchWord = e.target.value;
    const targetValue = new RegExp(searchWord, "gi");
    let licznik = 0;
    setFiltredArray(
      searchArray.filter((el) => {
        if (el.title.match(targetValue) && licznik < 5) {
          licznik++;
          return el;
        }
      })
    );
    if (searchWord === "") {
      setFiltredArray([]);
    }
  };
  const closeWindow = () => {
    setCloseInput(false);
  };
  const openeWindow = () => {
    setCloseInput(true);
  };

  const openDetailsItem = (detailID) => {
    setItemDetails((detailID = detailID - 1));
  };
  const closeWindoww = (value) => {
    if (value === true) {
      setItemDetails(null);
    }
  };
  return (
    <>
      {(itemDetails || itemDetails == 0) && (
        <ShopDetails
          title={array[itemDetails].title}
          price={array[itemDetails].price}
          img={array[itemDetails].image}
          description={array[itemDetails].description}
          ratingRate={array[itemDetails].rating.rate}
          ratingCount={array[itemDetails].rating.count}
          isWindowClosed={closeWindoww}
        />
      )}

      <div onMouseLeave={closeWindow} onClick={openeWindow}>
        <input
          type="text"
          className={classes.inputShop}
          placeholder="Search"
          onChange={findItem}
          defaultValue=""
        />
        {closeInput && (
          <ul className={classes.filtredListShopInput}>
            {filtredArray.map((el) => (
              <li
                key={el.title}
                className={classes.filtredListShopInputItem}
                onClick={() => openDetailsItem(el.id)}
              >
                <a href="#">
                  <img src={el.img} alt="item photo" /> {el.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ShopInput;
