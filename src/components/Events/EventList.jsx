import styles from "./EventList.module.css";
import Event from "./Event";

const EventList = () => {
  return (
    <div className={styles["event-list"]}>
      <h2>EVENTS: April</h2>
      <Event></Event>
      <Event></Event>
    </div>
  );
};

export default EventList;
