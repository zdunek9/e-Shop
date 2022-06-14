import classes from "./ShopDetails.module.css";
const ShopDetails = (props) => {
  const closeWindowAction = () => {
    props.isWindowClosed(true);
  };
  return (
    <>
      <div className={classes.wrapperShopDetails} onClick={closeWindowAction} >
        <div className={classes.mainShopDetails}>
          <img
            src={props.img}
            alt={props.title}
            className={classes.imgShopDetails}
          />
          <div className={classes.descriptionShopDetails}>
            <h1 className={classes.titleShopDetails}>{props.title}</h1>
            <h2 className={classes.descShopDetails}>{props.description}</h2>
            <p className={classes.ratingShopDetails}>
              {props.ratingRate}/5 by {props.ratingCount} ratings
            </p>
            <p className={classes.priceShopDetails}>Cost: {props.price}$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
