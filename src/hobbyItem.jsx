import "./hobbyItem.css";
import { useState, useRef, useEffect } from "react";
export default function Hobby(hobbyData) {
  let [hours, setHours] = useState(0);
  let [mins, setMins] = useState(0);
  let [sec, setSec] = useState(0);
  let timerInterval = useRef(null);

  useEffect(() => {
    if (hobbyData == true) {
      console.log(hobbyData);
    }
  }, [hobbyData]);
  const startTimer = () => {
    // Start Timer
    timerInterval.current = setInterval(() => {
      setSec((sec) => {
        if (sec >= 59) {
          setMins((mins) => {
            if (mins >= 59) {
              setHours((hours) => hours + 1);
              return 0;
            }
            // adds 1 to mins if mins is not greater than 59
            return mins + 1;
          });
          //sets to default value after conditions before is met
          return 0;
        }
        // adds 1 if sec is not greater than or equal to 59
        return sec + 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    //Stops the timer
    clearInterval(timerInterval.current);
  };

  const pad = (number) => {
    // add a leading zero if the number is less than 10
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div>
      {/* Hobby Title */}
      <h1>
        {pad(hours)}:{pad(mins)}:{pad(sec)}
      </h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
