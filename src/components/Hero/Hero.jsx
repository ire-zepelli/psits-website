import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.featured}>
        <img src="/public/sample-event-1.png" alt="" />
      </div>
      <h4>HEADLINES</h4>
      <h1>
        <span>CESAFI 2025:</span> Computer Quiz Bowl
      </h1>
    </div>
  );
};

export default Hero;
