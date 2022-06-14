import classes from "./Contact.module.css";
import twitter from "../../Img/icons/twitter.png";
import facebook from "../../Img/icons/facebook.png";
import github from "../../Img/icons/github.png";
import linkedin from "../../Img/icons/linkedin.png";
const Contact = () => {
  return (
    <section className={classes.wrapperContact} id="Contact">
      <div className={classes.bottomWrapperContact}>
        <h3>Get In Touch</h3>
        <a href="#">
          <img src={twitter} />
        </a>
        <a href="#">
          <img src={facebook} />
        </a>
        <a href="https://github.com/zdunek9" target="_blank">
          <img src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/micha%C5%82-zdu%C5%84czyk-a12754162"
          target="_blank"
        >
          <img src={linkedin} />
        </a>
      </div>
    </section>
  );
};
export default Contact;
