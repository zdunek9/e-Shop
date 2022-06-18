import { useState, useRef, useEffect } from "react";
import classes from "./ShopInput.module.css";
import ShopDetails from "../../ShopDetails/ShopDetails";
const ShopInput = (props) => {
  const [filtredArray, setFiltredArray] = useState([]);
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
        return null
      })
    );
    if (searchWord === "") {
      setFiltredArray([]);
    }
  };
  const openDetailsItem = (detailID) => {
    setItemDetails((detailID = detailID - 1));
  };
  const closeWindoww = (value) => {
    if (value === true) {
      setItemDetails(null);
    }
  };

  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div ref={ref}>
      {(itemDetails || itemDetails === 0) && (
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
      <div>
        <input
          onClick={props.hideInput}
          type="text"
          className={classes.inputShop}
          placeholder="Search"
          onChange={findItem}
          defaultValue=""
        />
        {props.show && (
          <ul className={classes.filtredListShopInput}>
            {filtredArray.map((el) => (
              <li
                key={el.title}
                className={classes.filtredListShopInputItem}
                onClick={() => openDetailsItem(el.id)}
              >
                <div>
                  <img src={el.img} alt={el.title} /> {el.title}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShopInput;
