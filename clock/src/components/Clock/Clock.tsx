import { useRef, useState } from "react";

import styles from "./clock.module.css";

const Clock = () => {
  const [second, setSecond] = useState(0);
  // const minute = second / 60;
  // const hour = second / 3600;

  const interval = useRef<any>(null);

  const startTimer = () => {
    // Clear any existing interval
    clearInterval(interval.current);

    interval.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  // in each second, second hand moves 6 degree
  // in each second, minute hand moves 6 / 60 degree
  // in each second, hour hand moves 6 / 3600 degree

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-48 h-48 rounded-full border border-amber-50 bg-amber-200 text-[#242424] text-sm relative">
        {Array.from({ length: 6 }, (_, idx) => {
          const commonClass = `flex flex-col justify-between h-full absolute top-0 left-1/2 -translate-x-1/2`;
          const commonStyle = {
            transform: `rotate(${30 * idx}deg)`,
          };
          const commonHourStyle = {
            transform: `rotate(-${30 * idx}deg)`,
          };

          let e1, e2;
          if (idx == 0) {
            (e1 = 12), (e2 = 6);
          } else {
            e1 = idx;
            e2 = idx + 6;
          }

          return (
            <div className={commonClass} style={commonStyle}>
              <div style={commonHourStyle}>{e1}</div>
              <div style={commonHourStyle}>{e2}</div>
            </div>
          );
        })}

        {/* Red Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#242424] absolute top-1/2 left-1/2 -translate-1/2 z-[1]" />

        {/* Second hand */}
        <div
          className={`h-24 w-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.gradient_background_hour}`}
          style={{
            transform: `rotate(${second * 6}deg)`,
          }}
        />

        {/* Minute Hand */}
        <div
          className={`h-20 w-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.gradient_background_minute}`}
          style={{
            transform: `rotate(${(second * 6) / 60}deg)`,
          }}
        />

        {/* Hour Hand */}
        <div
          className={`h-16 w-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.gradient_background_second}`}
          style={{
            transform: `rotate(${(second * 6) / 3600}deg)`,
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="text-2xl shadow-sm bg-gray-400 hover:bg-gray-300 transition-all rounded-sm px-2 py-1 cursor-pointer w-48"
          onClick={startTimer}
        >
          Start Timer
        </button>

        <button
          className="text-2xl shadow-sm bg-gray-400 hover:bg-gray-300 transition-all rounded-sm px-2 py-1 cursor-pointer w-48"
          onClick={stopTimer}
        >
          Pause Timer
        </button>
      </div>
    </div>
  );
};

export default Clock;

// 12 6
// 1 7
// 2 8
// 3 9
// 4 10
// 5 11
