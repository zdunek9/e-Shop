import classes from "./PromoItem.module.css";
import headphones from "../../Img/headphones.jpg";
const PromoItem = () => {
  return (
    <div className={classes.promoShopWrapper}>
      <img
        src={headphones}
        className={classes.headphonesShop}
        alt="New Kopthóres Events"
      />
      <div className={classes.titlePromoShopWrapper}>
        <h1>New Kopthóres Events</h1>
        <h2>available soon</h2>
      </div>
    </div>
  );
};
export default PromoItem;
