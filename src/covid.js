import './covid.css';
import {useState, useEffect} from 'react';

export default function Covid() {

    const [infected, setInfected] = useState('');
    const [dead, setDead] = useState('');
    const [recovered, setRecovered] = useState('');

    useEffect(() => {
        getCoronaData()
    },[])

    const getCoronaData = async () => {
       const data = await fetch('https://corona-api.com/countries/RU');
       const json = await data.json();
       const d =  json.data.latest_data;
       setInfected(d.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
       setDead(d.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
       setRecovered(d.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    }


    return (
        <div className='covid'>
            <div className='covid__covid'>
                COVID-2019
            </div>

            <div className='covid__infected'>
                Infected: <span className='text-pink'>{infected}</span> people
            </div>

            <div className='covid__dead'>
                Dead: <span className='text-pink'>{dead} </span>people
            </div>

            <div className='covid__recovered'>
                Recovered: <span className='text-pink'>{recovered}</span> people
            </div>

        </div>
    )
}