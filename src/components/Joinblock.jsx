import React from 'react';
import socket from '../socket';
import axios from 'axios';

function Joinblock({onLogIn}) {
  const [roomId, setRoomID] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false)

  const handleChangeRoom = (event) => {
    setRoomID(event.target.value)
  }

  const handleChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const onEnter = async () => {
    if (!roomId || !userName) {
      alert('Неверные данные')
    }
    else {
      const obj = {
        roomId, 
        userName,
      }
      setLoading(true);
      await axios.post('/rooms', obj);
      onLogIn(obj);
    }
  }

  return (
    <div className="windowBlock">
      <div className="connectionBlock">
        <i className="far fa-comment-dots"></i>
        <input type='text' placeholder='Room ID...'
          value={roomId}
          onChange={handleChangeRoom} />
        <input type='text' placeholder='Name...'
          value={userName}
          onChange={handleChangeUserName} />
        <button onClick={onEnter}>{isLoading ? 'WAIT...' : 'LOGIN...'}</button>
      </div>
    </div>
  )
}

export default Joinblock
