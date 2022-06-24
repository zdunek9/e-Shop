import classes from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={classes.loadingWrapper}>
      Please wait <span>. . . . </span>
    </div>
  );
};
export default Loading;
