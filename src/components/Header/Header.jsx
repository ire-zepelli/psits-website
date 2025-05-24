import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  return (
    <header className={styles.header}>
      <nav className={styles["header-nav"]}>
        <div className={styles["left-nav"]}>
          <a
            href="https://www.facebook.com/UCLMCollegeofComputerStudies"
            target="_blank"
          >
            <img
              className={styles["small-logo"]}
              src="/psits logo.png"
              alt="psits logo"
            />
          </a>
          <a href="https://www.facebook.com/uclmpsitsofficial" target="_blank">
            <img
              className={styles["small-logo"]}
              src="/CCS logo.png"
              alt="CCS logo"
            />
          </a>
          <h3 className={styles["nav-title"]}>UCLM - PSITS / Dashboard</h3>
        </div>
        <div className={styles["right-nav"]}>
          {showNav ? (
            <div className={styles["burger-nav"]}>
              <button className={styles["burger-button"]} onClick={handleClick}>
                <img
                  className={styles.icon}
                  src="/burger_btn.svg"
                  alt="burger_icon"
                />
              </button>
              <h3>About Us</h3>
              <h3>Events</h3>
              <h3>Dashboard</h3>
            </div>
          ) : (
            <button className={styles["burger-button"]} onClick={handleClick}>
              <img
                className={styles.icon}
                src="/burger_btn.svg"
                alt="burger_icon"
              />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
