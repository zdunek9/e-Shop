import { useState } from "react";
import classes from "./ShopInput.module.css";
const ShopInput = (props) => {
  const [filtredArray, setFiltredArray] = useState([]);

  const array = props.arrayData;
  const findItem = (e) => {
    const searchArray = array.map((el) => ({ title: el.title, img: el.image }));
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
  return (
    <>
      <input
        type="text"
        className={classes.inputShop}
        placeholder="Search"
        onChange={findItem}
        defaultValue=""
      />
      <ul className={classes.filtredListShopInput}>
        {filtredArray.map((el) => (
          <li key={el.title} className={classes.filtredListShopInputItem}>
            <a href="#">
              <img src={el.img} alt="item photo" /> {el.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShopInput;
