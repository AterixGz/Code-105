import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0); // สถานะของเวลาทั้งหมดในวินาที
  const [isRunning, setIsRunning] = useState(false); // สถานะการทำงาน

  // ฟังก์ชันนี้จะทำงานเมื่อ isRunning เป็น true
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1); // เพิ่มเวลาในทุกๆ 1 วินาที
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer); // หยุดจับเวลาเมื่อหยุดวิ่ง
    }

    return () => clearInterval(timer); // เคลียร์ timer เมื่อ component ถูกทำลาย
  }, [isRunning, time]);

  // ฟังก์ชันเริ่มหรือหยุดจับเวลา
  const handleStartStop = () => {
    setIsRunning(!isRunning); // เปลี่ยนสถานะจากทำงานเป็นหยุดหรือจากหยุดเป็นทำงาน
  };

  // ฟังก์ชันรีเซ็ตเวลา
  const handleReset = () => {
    setIsRunning(false); // หยุดการจับเวลา
    setTime(0); // รีเซ็ตเวลาเป็น 0
  };

  // ฟังก์ชันคำนวณชั่วโมง นาที และวินาที
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600); // คำนวณจำนวนชั่วโมง
    const minutes = Math.floor((timeInSeconds % 3600) / 60); // คำนวณจำนวนนาที
    const seconds = timeInSeconds % 60; // คำนวณจำนวนวินาที

    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
  };

  return (
    <div style={styles.container}>
      <h1>Timer: {formatTime(time)}</h1>
      <div>
        <button onClick={handleStartStop} style={styles.button}>
          {isRunning ? 'Stop' : 'Start'} {/* เปลี่ยนข้อความจาก Start เป็น Stop */}
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default App;
