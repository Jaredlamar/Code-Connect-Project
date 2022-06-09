import React, { useState, useEffect } from "react";
import EventList from "./EventList";

function EventContainer({ currentUser, handleEventPost, handlePostDelete }) {
  const [postedEvents, setPostedEvents] = useState([]);

  // console.log(currentUser);
  useEffect(() => {
    fetch(`/posts`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPostedEvents(data);
      });
  }, [handleEventPost]);

  let mappedEvents = postedEvents.map((postedEvent) => {
    return (
      <EventList
        postedEvent={postedEvent}
        key={postedEvent.id}
        currentUser={currentUser}
      />
    );
  });

  return <div>{mappedEvents}</div>;
}

export default EventContainer;
