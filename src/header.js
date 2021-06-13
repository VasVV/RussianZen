import './header.css';
import {useState, useEffect} from 'react';

import SettingsIcon from '@material-ui/icons/Settings';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import {useDispatch, useSelector} from 'react-redux';

import RainImage from './rain.png';
import ForestImage from './forest.png';
import WavesImage from './waves.png';
import SnowImage from './snow.png';



export default function Header() {

    const [time, setTime] = useState('');
    const [showHide, setShowHide] = useState(false);
    
    const dispatch = useDispatch();
    const sound = useSelector(state => state.sound);


    const toggleSound = () => {
        dispatch({type: "TOGGLE"})
    }

    const selectBackground = image => {
        console.log(image);
        dispatch({type: 'SELECT_BACKGROUND', payload: image});

        setShowHide(!showHide);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date();
            let minutes = Math.floor((date/ (1000 * 60)) % 60);
            let hours = Math.floor((date / (1000 * 60 * 60)) % 24);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;

            setTime(`${hours}:${minutes}`)
        }, 1000);
        return () => clearInterval(interval);
      }, []);


    return (
        <div className='header'>
            <div className='header__clock'>
                {time}
            </div>
            <div className='header__settings'>
                {!sound ? <VolumeOffIcon onClick={() => toggleSound()} /> :  <VolumeUpIcon onClick={() => toggleSound()} />}
                
                <SettingsIcon onClick={() => setShowHide(!showHide)} />
            </div>
            <Dialog onClose={() => setShowHide(!showHide)} aria-labelledby="simple-dialog-title" open={showHide}>
                <DialogTitle className='title' >Select background</DialogTitle>
                    <div className='header__settings__options-grid'>
                        <div className='header__settings__options-grid__option'>
                            <img src={RainImage} className='header__settings__options-grid__option__image' onClick={() => selectBackground('rain')}/>
                        </div>

                        <div className='header__settings__options-grid__option'>
                            <img src={SnowImage} className='header__settings__options-grid__option__image' onClick={() => selectBackground('snow')}/>

                        </div>

                        <div className='header__settings__options-grid__option'>
                            <img src={WavesImage} className='header__settings__options-grid__option__image' onClick={() => selectBackground('waves')}/>

                        </div>

                        <div className='header__settings__options-grid__option'>
                            <img src={ForestImage} className='header__settings__options-grid__option__image' onClick={() => selectBackground('forest')}/>

                        </div>
                    </div>
                </Dialog>
        </div>
    )
}