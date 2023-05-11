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
      <h1>hi, i'm Akshay</h1>
      <p>
        This is the place where I unleash my web development knowledge and spill
        the beans about my life. Strap in, folks, 'cause it's gonna be a wild
        ride!
      </p>
    </section>
  );
};

export default Hero;
