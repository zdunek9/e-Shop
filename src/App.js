import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
function App() {
  const showCard = useSelector((state) => state.counter.showCard);
  return (
    <div className={`${classes.App} ${classes.added}`}>
      <Route path="/" exact>
        <Header />
      </Route>
      <Route path="/shop">
        <Shop />
        {showCard && <Cart />}
      </Route>
    </div>
  );
}

export default App;
