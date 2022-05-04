import React, {useState} from "react";
import ReactDom from 'react-dom'; 
import styles from "./clock.css";

const Clock = () => {
    let Time = new Date();

    let [hour, setHour] = useState(Time.getHours());
    let [minutes, setMinutes] = useState(Time.getMinutes());
    let [seconds, setSeconds] = useState(Time.getSeconds());
    let [day, setDay] = useState(Time.getDate());
    let [month, setMonth] = useState(Time.getMonth());
    let [year, setYear] = useState(Time.getFullYear());
    
    function showTime() {
        setTimeout(() => {
            Time = new Date();
            setHour(Time.getHours());
            setMinutes(Time.getMinutes());
            setSeconds(Time.getSeconds());
            setDay(Time.getDate());
            setMonth(Time.getMonth());
            setYear(Time.getFullYear());
        }, 1000);
    }
    showTime();

    return (
        <div className="time">
            <div className="clock">
                <span>{hour < 10 ? "0" + hour : hour}&nbsp;:&nbsp;</span>
                <span>{minutes < 10 ? "0" + minutes : minutes}&nbsp;:&nbsp;</span>
                <span>{seconds < 10 ? "0" + seconds : seconds}</span>
            </div>
            <div className="date">
                <span>{day < 10 ? "0" + day : day}&nbsp;-&nbsp;</span>
                <span>{month < 9 ? "0" + (month + 1) : (month + 1)}&nbsp;-&nbsp;</span>
                <span>{year}</span>
            </div>
        </div>
    );
};

export default Clock;