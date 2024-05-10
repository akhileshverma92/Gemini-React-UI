import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import Profile from '../Profile.jsx/Profile'
import { useState } from 'react'

function Main() {
    const [profile, setProfile] = useState(false)
    return (
        <>
            <div className="main">
                <div className="nav">
                    <p>Gemini</p>
                    <img src={assets.user_icon} alt="" onClick={()=>setProfile(prev=>!prev)} />
                      
                </div>
              
                <div className="main-container">
                    <div className="greet">
                        <p><span>Hello, Akkyyy</span></p>
                        <p>How can i help you today</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>i am a card</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>i am a card</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                          <div className="card">
                            <p>i am a card</p>
                            <img src={assets.message_icon} alt="" />
                        </div> 
                         <div className="card">
                            <p>i am a card</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                 
                    <div className="main-bottom">
                        <div className="search-box">
                            <input type="text" name="" id="" placeholder='Enter Prompt Here' />
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                <img src={assets.send_icon} alt="" />
                            </div>
                          
                        </div>
                        <p className="bottom-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a velit magni quisquam! Necessitatibus, itaque?</p>
                    </div>
                </div>
            </div>
            { profile && <Profile onClose={()=>{setProfile(false)}}/>}
    
 </>
    )
}

export default Main