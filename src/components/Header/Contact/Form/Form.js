import classes from "./Form.module.css";
const Form = () => {
  return (
    <form className={classes.formWrapper}>
      <h2>Contact form</h2>
      <p>Full name:</p>
      <input type="text"></input>
      <p>Email address:</p>
      <input type="email" required></input>
      <p>Message:</p>
      <textarea
        maxLength="255"
        placeholder="Max 255 characters"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};
export default Form;
