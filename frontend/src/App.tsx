import React, { useEffect, useState } from 'react';
import ListItem from './components/ListItem';
import api from './services/api';
import IPlayer from './interfaces/IPlayer';

const player : IPlayer ={
  player_id: 1,
  name: "Samus",
  level: 35
}

function App() {
  const [state, setState] = useState<IPlayer>(player)
  
  useEffect(() =>{
    api.get(`/player/1`).then(response => {
      setState(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Random Item Generator</h1>
      <ListItem player={state}/>
    </div>
  );
}

export default App;
