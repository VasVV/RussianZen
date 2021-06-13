import './putin.css';
import {useState, useEffect} from 'react';

export default function Putin () {

    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date()-new Date('January 1, 2000 00:00:00');
            
            let years = new Date(date).getFullYear() - 1970;

            let currYear = new Date().getFullYear();

            var Difference_In_Time = new Date().getTime() - new Date(`January 1, ${currYear} 00:00:00`).getTime();
  

            var Difference_In_Days = Math.ceil( (Difference_In_Time / (1000 * 3600 * 24) ) );
            

            let seconds = Math.floor((date / 1000) % 60)
            let minutes = Math.floor((date/ (1000 * 60)) % 60);
            let hours = Math.floor(date / (1000 * 60 * 60) % 24);


            let d = Difference_In_Days !== 1 ? 'days' : 'day';
            let h = hours !== 1 ? 'hours' : 'hour';
            let m = minutes !== 1 ? 'minutes' : 'minute';
            let s = seconds !== 1 ? 'seconds' : 'second';

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;



            setTime(`${years} years ${Difference_In_Days} ${d} ${hours} ${h} ${minutes} ${m} ${seconds} ${s}`)
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (

        <div className='putin'>
            Putin in power for  <span className='text-pink'>{time}</span>
        </div>
    )
}