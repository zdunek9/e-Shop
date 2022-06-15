import classes from "./Header.module.css";
import image_watch from "../Img/ew.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className={classes.headerWrapper} id="Header">
      <div className={classes.headerTopBar}>
        <div>
          <p className={classes.headerTopBarName}>smartwatch</p>
        </div>
        <div className={classes.headerTopBarCat}>
          <p>Home</p>
          <a className={classes.aboutHeader} href="#About">
            about
          </a>
          <Link to="/shop">shop</Link>
          <a href="#Contact">contact</a>
        </div>
      </div>
      <div className={classes.headerMainPage}>
        <img
          src={image_watch}
          className={classes.imageWatch}
          alt="smartwatch"
        />
        <div className={classes.tittleHeader}>
          <h1>smartwatch</h1>
          <h1>Series 6</h1>
          <p>Avaliable now</p>
          <Link to="/shop">
            <button className={classes.shopNowBTN}>Shop Now</button>
          </Link>
          <a href="#About" className={classes.LearnMoreBTN}>
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
