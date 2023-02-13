import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'; 
// import MobileGame from './components/game-mobile'
import Game from './components/game'
import Menu from './components/menu'
import { useMediaQuery } from 'react-responsive';

function App() {

  const [start, setStart] = useState(false);
  const [animeList, setAnimelist] = useState({});
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const changeStart = (data) => {
    setStart(data)
  }


  const changeAnimeList = (data) => {
    setAnimelist(data)
  }

  return (
    <div className="App">
      {/* {!start && <Menu setStart = {changeStart} animeList = {animeList} setAnimelist = {changeAnimeList}/>}
      {start  && <Game setStart = {changeStart}  userAnimeList = {animeList}/>} */}
      <Game setStart = {changeStart}  userAnimeList = {animeList} isMobile = {isMobile}/>
    </div>
  );
}

export default App;
