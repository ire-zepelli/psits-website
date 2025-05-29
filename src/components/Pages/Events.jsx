import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Events.module.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = e.target.event.value;
    const location = e.target.location.value;
    const date = e.target.date.value;
    const bannerFile = e.target.banner.files[0];

    const newEvent = {
      event,
      location,
      date,
      banner: bannerFile ? URL.createObjectURL(bannerFile) : null,
    };

    setEvents((prev) => [...prev, newEvent]);
    e.target.reset();
  };

  const handleRemove = (indexToRemove) => {
    setEvents((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <Header />
      <div className={styles.content}>
        <form className={styles.card} onSubmit={handleSubmit}>
          <label htmlFor="event">Event: </label>
          <input type="text" id="event" name="event" />
          <br />
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" name="location" />
          <br />
          <label htmlFor="date">Date: </label>
          <input type="datetime-local" id="date" name="date" />
          <br />
          <label htmlFor="banner">Banner: </label>
          <input type="file" id="banner" name="banner" />
          <br />
          <input type="submit" value="Add Event" />
        </form>
      </div>
      <hr />
      <div className={styles["events-list"]}>
        <h1>Events</h1>
        <table className={styles["events-table"]}>
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Location</th>
              <th>Banner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((evt, index) => (
              <tr key={index}>
                <td>{evt.event}</td>
                <td>{evt.date}</td>
                <td>{evt.location}</td>
                <td>
                  {evt.banner ? (
                    <img
                      src={evt.banner}
                      alt="Banner"
                      width="100"
                      height="60"
                    />
                  ) : (
                    "No Banner"
                  )}
                </td>
                <td>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Events;
