import { useState } from "react";
import classes from "./ShopInput.module.css";
const ShopInput = (props) => {
  const [inputValue, setInputValue] = useState(0);
  const [filtredArray, setFiltredArray] = useState([]);
  const array = props.arrayData;
  const findItem = (e) => {
    const searchArray = array.map((el) => ({ title: el.title, img: el.image }));
    setInputValue(e.target.value);
    const regex = new RegExp(inputValue, "gi");

    if (inputValue && inputValue.length >= 2) {
      let licznik = 0;
      let newArray = searchArray.filter((item) => {
        if (item.title.match(regex) && licznik < 5) {
          licznik++;
          return item.title.match(regex);
        }
      });
      setFiltredArray(newArray);
    }
  };
  return (
    <>
      <input
        type="text"
        className={classes.inputShop}
        placeholder="Search"
        onChange={findItem}
      />
      <ul className={classes.filtredListShopInput}>
        {inputValue.length >= 3 &&
          filtredArray.map((el) => (
            <li key={el.title} className={classes.filtredListShopInputItem}>
              <a href="#">
                <img src={el.img} alt={el.title} /> {el.title}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ShopInput;
