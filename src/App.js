import Joinblock from './components/Joinblock';
import socket from './socket';
import React from 'react'
import { authentication } from './reducer';

function App() {

  const initialState = ({
    isAuth: false
  })

  const [state, dispatch] = React.useReducer(authentication, initialState)
  console.log(state)

  const onLogIn = () => {
    dispatch({
      type: 'IS_AUTH',
      payload: true,
    })
  }

  return (
    <div className="wrapper">
      {state.isAuth ? <h1>МЫ В ЧАТЕЕЕ!!!</h1> : <Joinblock onLogIn={onLogIn}/>}
    </div>
  );
}

export default App;
