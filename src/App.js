import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
function App() {
  const showCard = useSelector((state) => state.counter.showCard);
  return (
    <div className={`${classes.App} ${classes.added}`}>
      <Header />
      <Shop />
      {showCard && <Cart />}
    </div>
  );
}

export default App;
