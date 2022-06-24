import classes from "./Header.module.css";
import image_watch from "../Img/ew.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <section className={classes.headerWrapper} id="Header">
      <div className={classes.headerTopBar}>
        <div>
          <p className={classes.headerTopBarName}>smartwatch</p>
        </div>
        <div className={classes.headerTopBarCat}>
          <p>Home</p>
          <HashLink to="#About" className={classes.aboutHeader} href="#About">
            about
          </HashLink>
          <Link to="/shop">shop</Link>
          <HashLink to="#Contact">contact</HashLink>
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
          <HashLink to="#About" className={classes.LearnMoreBTN}>
            Learn more
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Header;
