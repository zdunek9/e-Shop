import classes from "./About.module.css";
const About = () => {
  return (
    <section className={classes.aboutWrapper} id="About">
      <h1 className={classes.titleAbout}>ABOUT</h1>
      <div className={classes.firstAbout}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </div>
      <div className={classes.secondAbout}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur
      </div>
      <div className={classes.thirdAbout}>
        Vivamus ut felis in nulla molestie posuere. Integer porta molestie
        lectus non condimentum. Integer sodales neque ac mi accumsan, nec auctor
        elit aliquam. Pellentesque sed quam scelerisque, interdum ligula eget,
        luctus neque. Vivamus accumsan dignissim enim a tincidunt. Donec nec
        lectus augue. Ut fringilla, tellus nec sodales elementum, nunc risus
        fermentum lectus, in ultricies massa magna vitae purus.
      </div>
    </section>
  );
};
export default About;
