import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles["section-a"]}>
          <h1>PSITS</h1>
          <p>We are absolutely batshit insane if you mess with us</p>
          <div className={styles.links}>
            <a
              href="https://www.facebook.com/uclmpsitsofficial"
              target="_blank"
            >
              <img src="/facebook-icon.png" alt="fb" />
            </a>
            <a href="https://www.gmail.com" target="_blank">
              <img src="/gmail-icon.png" alt="gmail" />
            </a>
          </div>
        </div>
        <div className={styles["section-b"]}>
          <p>More of PSITS</p>
          <span>
            <p>Media</p>
            <p>Events</p>
            <p>Programs</p>
            <p>Spaces</p>
            <p>Newsletters</p>
            <p>Deals</p>
          </span>
        </div>
        <div className={styles["section-b"]}>
          <p>More of PSITS</p>
          <span>
            <p>Media</p>
            <p>Events</p>
            <p>Programs</p>
            <p>Spaces</p>
            <p>Newsletters</p>
            <p>Deals</p>
          </span>
        </div>
      </footer>
      <hr />
      <p>© UCLM - PSITS Dev Team 2025</p>
    </>
  );
};

export default Footer;
