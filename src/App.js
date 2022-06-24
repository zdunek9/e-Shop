import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import About from "./components/Header/About/About";
import Contact from "./components/Header/Contact/Contact";
import { useEffect, useState } from "react";
function App() {
  const showCard = useSelector((state) => state.counter.showCard);
  const [fetchData, setFetchData] = useState(null);
  const [catchError, setCatchError] = useState(null);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const tempArray = await response.json();
      setFetchData(tempArray);
    };
    fetchDataFromAPI().catch((error) => {
      setCatchError(error.message);
    });
  }, []);

  return (
    <div className={`${classes.App} ${classes.added}`}>
      <Route path="/" exact>
        <Header />
        <About />
        <Contact />
      </Route>
      <Route path="/shop">
        <Shop catchError={catchError} fetchData={fetchData} />
        {showCard && <Cart />}
      </Route>
    </div>
  );
}

export default App;
