import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Header from './components/Header';
import Search from './components/Search';
import GameCatalog from './components/GameCatalog';
import React from 'react';
import { useState } from 'react';

const api_clientid= process.env.REACT_APP_API_CLIENTID;

function App() {
  const [games,setGames]=useState([]);
  console.log(games);
  return (
    <div className='App'>
      <Header title='Boardgames showroom'></Header>
      <Search api_clientid={api_clientid} setGames={setGames}></Search>
      <GameCatalog games={games}></GameCatalog>
    </div>
  );
}

export default App;
