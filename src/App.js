import logo from './logo.svg';
import './App.css';

import Header from './header';
import Putin from './putin';
import Covid from './covid';
import Currences from './currences';
import {useState, useEffect} from 'react';

import rain from './rain.mp4';
import waves from './waves.mp4';
import snow from './snow.mp4';
import forest from './forest.mp4';


import {useSelector} from 'react-redux';



function App() {

  const sound = useSelector(state => state.sound);
  const background = useSelector(state => state.background);
  const [bg, setBg] = useState(rain);

  useEffect(() => {
    switch(background) {
      case 'rain':
        setBg(rain);
        break;
      case 'forest':
        setBg(forest);
        break;
      case 'waves':
        setBg(waves);
        break;
      case 'snow':
        setBg(snow);
        break;      
    }
  },[background])

  return (
    <div className="App">
      <video autoPlay muted={!sound&&'muted'} loop className="show rainVideo" type="video/mp4" src={bg}>
      </video>
      <Header />
      <Putin />
      <Covid />
      <Currences />
    </div>
  );
}

export default App;
