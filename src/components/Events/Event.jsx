import styles from "./Event.module.css";

const Event = (props) => {
  return (
    <div className={styles.card}>
      <h1>12th ICT CONGRESS 2025</h1>
      <img src={props.img} alt={props.key} />
    </div>
  );
};

export default Event;
