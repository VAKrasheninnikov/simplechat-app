import Joinblock from './components/Joinblock';
import socket from './socket';
import React from 'react'
import { authentication } from './reducer';


function App() {

  const initialState = ({
    joined: false,
    roomId: null,
    userName: null,
  })

  const [state, dispatch] = React.useReducer(authentication, initialState)
  console.log(state)

  const onLogIn = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    })
    socket.emit('ROOM:JOIN',obj);
  }

  return (
    <div className="wrapper">
      {state.joined ? <h1>МЫ В ЧАТЕЕЕ!!!</h1> : <Joinblock onLogIn={onLogIn}/>}
    </div>
  );
}

export default App;
