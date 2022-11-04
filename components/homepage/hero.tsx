import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/rawwrcat.jpg"
          alt="its me"
          width={300}
          height={300}
        />
      </div>
      <h1>hi, i'm rawwr</h1>
      <p>
        I love blogging about webdevelopment - both front-end and back-end. I
        also like blogging about my personal life and my interests.
      </p>
    </section>
  );
};

export default Hero;
