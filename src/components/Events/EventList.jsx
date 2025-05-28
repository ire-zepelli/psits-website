import styles from "./EventList.module.css";
import Event from "./Event";

const EventList = () => {
  return (
    <div className={styles["event-list"]}>
      <h2>EVENTS: April</h2>
      <Event img="/event-banner-1.png"></Event>
      <Event img="/event-banner-2.png"></Event>
    </div>
  );
};

export default EventList;
