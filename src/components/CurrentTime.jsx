
import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const getCurrentTime = () => {
    const currentTime = new Date();
    return currentTime.getHours() + " : " + currentTime.getMinutes() + " : " + currentTime.getSeconds();
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Current Time...</h1>
      <h1>{currentTime}</h1>
    </>
  );
};

export default CurrentTime;
