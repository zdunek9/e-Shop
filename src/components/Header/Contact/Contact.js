import classes from "./Contact.module.css";
import twitter from "../../Img/icons/twitter.png";
import facebook from "../../Img/icons/facebook.png";
import github from "../../Img/icons/github.png";
import linkedin from "../../Img/icons/linkedin.png";
import arrowUp from "../../Img/icons/up-arrow.png";
import Form from "./Form/Form";
import { HashLink } from "react-router-hash-link";
const Contact = () => {
  return (
    <section className={classes.wrapperContact} id="Contact">
      <Form />
      <div className={classes.adressDetailsContact}>
        <p>Smartwatch Holding Sp. z o.o</p>
        <p>130 Oliver Street, Fort Worth</p>
        <p>76118, Texas</p>
        <p>817-285-3055</p>
        <p>randomemailadres@domain.com</p>
        <p>+48 12 352 23 51 Mon - Fri from 8am to 4pm</p>
      </div>
      <div className={classes.bottomWrapperContact}>
        <h3>Get In Touch</h3>
        <a href="/#">
          <img src={twitter} alt="EmptyLink" />
        </a>
        <a href="/#">
          <img src={facebook} alt="EmptyLink" />
        </a>
        <a href="https://github.com/zdunek9" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/micha%C5%82-zdu%C5%84czyk-a12754162"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <HashLink to="#Header" className={classes.buttonArrowUp}>
        <img src={arrowUp} className={classes.arrowUp} alt="arrowUp"></img>
      </HashLink>
    </section>
  );
};
export default Contact;
