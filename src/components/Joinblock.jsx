import React from 'react';
import socket from '../socket';
import axios from 'axios';

function Joinblock() {
  const [roomId, setRoomID] = React.useState('');
  const [userName, setUserName] = React.useState('');

  const handleChangeRoom = (event) => {
    setRoomID(event.target.value)
  }

  const handleChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const onEnter = () => {
    if (!roomId || !userName) {
      alert('Неверные данные')
    }
    axios.post('/rooms', {
      roomId,
      userName
    })
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
        <button onClick={onEnter}>LOGIN...</button>
      </div>
    </div>
  )
}

export default Joinblock
