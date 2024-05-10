import React from 'react'
import './Profile.css'

function Profile({onClose}) {
  return (
<>
<div className="container">
<div className="profile-card">
    <div className="profile-image">
      <img src="https://imgs.search.brave.com/TIrBKdDQVqiDeTihtv2u659qn-MhjLkbEzfxrxlRxJM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzQyMS8xNC81/NjEvc3BpZGVybWFu/LWludG8tdGhlLXNw/aWRlci12ZXJzZS13/YWxscGFwZXItcHJl/dmlldy5qcGc" alt="" />
    </div>
    <div className="profile-info">
      <h2>Dev Akkyyy</h2>
      <p>Web Developer</p>
      <p>Location: Kanpur , India</p>
      <p>Email: akkyyy@example.com</p>
    </div>
    <button onClick={onClose}>close</button>
  </div>
 
  </div>
 
</>
)
}

export default Profile