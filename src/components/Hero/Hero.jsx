import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.featured}>
        <div className={styles.gradient}></div>
        <img src="/sample-event-1.png" alt="" />
      </div>
      <div className={styles["headline-text"]}>
        <h4>HEADLINES</h4>
        <h1>
          <span>CESAFI 2025:</span> Computer Quiz Bowl
        </h1>
      </div>
    </div>
  );
};

export default Hero;
