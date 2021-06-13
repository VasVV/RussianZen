import './currences.css';

import {useState, useEffect} from 'react';


export default function Currences() {

    const [usd, setUsd] = useState('');
    const [eur, setEur] = useState('');
    const [usdEur, setUsdEur] = useState('');
    const [brent, setBrent] = useState('');
    const [brentrub, setBrentrub] = useState('');


    useEffect(() => {
        getCurrencyData()

    },[]);


    const getCurrencyData = async() => {
        const dollar = await fetch('https://v6.exchangerate-api.com/v6/094f7bd4b70585cc27e94f92/pair/USD/RUB/');
        const dollarjson = await dollar.json();
        setUsd(dollarjson.conversion_rate.toFixed(2));

        const eurusd = await fetch('https://v6.exchangerate-api.com/v6/094f7bd4b70585cc27e94f92/pair/EUR/USD/');
        const eurusdjson = await eurusd.json();
        setUsdEur(eurusdjson.conversion_rate.toFixed(2))

        const euro = await fetch('https://v6.exchangerate-api.com/v6/094f7bd4b70585cc27e94f92/pair/EUR/RUB/');
        const eurojson = await euro.json();
        setEur(eurojson.conversion_rate.toFixed(2))

        const brent = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=CL%3DF", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d234c67f35mshbea80aed4e60f49p1e473fjsnd4058c64c4ec",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })

        const brentjson = await brent.json();
        setBrent(brentjson.quoteResponse.result[0].ask);

        setBrentrub(Math.ceil(brentjson.quoteResponse.result[0].ask * dollarjson.conversion_rate))


      


    }

    return (
        <div className='currences'>
            <div className='currences__curr'>
                <div className='currences__curr__num'>
                    {usd}
                </div>
                <div className='currences__curr__static'>
                    rubles per dollar
                </div>
                
            </div>

            <div className='currences__curr'>
                <div className='currences__curr__num'>
                    {eur}
                </div>
                <div className='currences__curr__static'>
                    rubles per euro
                </div>
                <div className='currences__curr__static'>
                   {usdEur} EUR/USD
                </div>
                
            </div>

            <div className='currences__curr'>
                <div className='currences__curr__num'>
                    {brent}
                </div>
                <div className='currences__curr__static'>
                    dollars per barrel
                </div>
                <div className='currences__curr__static'>
                  {brentrub}  rubles per barrel
                </div>
            </div>

        </div>
    )
}