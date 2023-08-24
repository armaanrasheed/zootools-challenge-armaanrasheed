import React from 'react'
import './Leaderboard.css'
import data from './data.js'
import traffic from './traffic.js'
import signup from './signup.js'
import { useState } from 'react'



export default function Leaderboard(){

    {/*traffic states*/}
    const [isButton1Highlighted,setIsButton1Highlighted] = useState(true);
    const [isButton2Highlighted,setIsButton2Highlighted] = useState(false);

    const highlightButton1 = () => {
        setIsButton1Highlighted(true);
        setIsButton2Highlighted(false);
    }

    const highlightButton2 = () => {
        setIsButton1Highlighted(false);
        setIsButton2Highlighted(true);
    }

    {/*signup states*/}
    const [isButton3Highlighted,setIsButton3Highlighted] = useState(true);
    const [isButton4Highlighted,setIsButton4Highlighted] = useState(false);

    const highlightButton3 = () => {
        setIsButton3Highlighted(true);
        setIsButton4Highlighted(false);
    }

    const highlightButton4 = () => {
        setIsButton3Highlighted(false);
        setIsButton4Highlighted(true);
    }

    {/*browser states*/}
    const [isButton5Highlighted,setIsButton5Highlighted] = useState(true);
    const [isButton6Highlighted,setIsButton6Highlighted] = useState(false);

    const highlightButton5 = () => {
        setIsButton5Highlighted(true);
        setIsButton6Highlighted(false);
    }

    const highlightButton6 = () => {
        setIsButton5Highlighted(false);
        setIsButton6Highlighted(true);
    }
    
    return(
        <div className="leaderboard-container">

            <div className = "small-container-one" id = "user-board">
                <h1 id="user-leaderboard-title">User leaderboard</h1>
                <button id="see-leaderboard">See leaderboard</button>
                <div className ="user-info">
                    <p className="labels" id="user-label-one">Email</p>
                    <p className="labels" id="user-label-two">Friends invited</p>
                    <p className="labels" id="user-label-three">Country</p>

                
                    <ul className="list-users">
                        {data.map((user, index) => (
                            <li key={index}>
                                <p id="tags-one">{user.email}</p>
                                <p id="tags-two">{user.users}</p>
                                <p id="tags-three">{user.country}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                
            </div>
            {/* Traffic */}
            <div className = "small-container-two" id = "location-board">
                    <h1 id="user-leaderboard-title">Traffic</h1>
                    <button id="see-traffic">See traffic sources</button>

                    <button
                    className={isButton1Highlighted ? 'highlightedButton' : ''}
                    id ="source-btn"
                    onClick={highlightButton1}
                    >Source</button>

                    <button
                    className={isButton2Highlighted ? 'highlightedButton' : ''}
                    id ="city-btn"
                    onClick={highlightButton2}
                    >City</button>    
                
                {isButton1Highlighted ? 
                    <ul className="traffic-list-users">
                        {traffic.map((user, index) => (
                            
                            <li key={index}>
                                <div className="traffic-bar">
                                    <p id={`traffic-tags-${user.width}`}>{user.source}</p>
                                </div>
                                <p id="traffic-tags-two">{user.users}</p>
                            </li>
                        ))}
                    </ul>
                : <ul className="traffic-list-users" >
                        {traffic.map((user, index) => (
                            <li key={index} >
                                <div className="traffic-bar">
                                    <p id={`traffic-tags-${user.width}`}>{user.city}</p>
                                </div>
                                <p id="traffic-tags-two">{user.users}</p>
                            </li>

                        )
                        
                        )}

                    </ul>}

                    
            </div>

            {/* Signup Location */}
            <div className = "small-container-two" id = "location-board">
                <h1 id="user-leaderboard-title">Signup location</h1>
                        <button id="see-traffic">See all countries</button>

                        <button
                        className={isButton3Highlighted ? 'highlightedButton' : ''}
                        id ="source-btn"
                        onClick={highlightButton3}
                        >Country</button>

                        <button
                        className={isButton4Highlighted ? 'highlightedButton' : ''}
                        id ="city-btn"
                        onClick={highlightButton4}
                        >City</button>    
                    
                    {isButton3Highlighted ? 
                        <ul className="signup-list-users">
                            {signup.map((location, index) => (
                                <li key={index}>
                                        <div className="signup-bar">
                                            <p id={`signup-tags-${location.width}`} ><img src={location.flag} id="flag-img"></img>{location.country}</p>
                                        </div>
                                        <p id="signup-tags-two">{location.users}</p>
                                
                                </li>
                            ))}
                        </ul>
                    : <ul className="signup-list-users">
                    {signup.map((location, index) => (
                        <li key={index}>
                                <div className="signup-bar">
                                    <p id={`signup-tags-${location.width}`} ><img src={location.flag} id="flag-img"></img>{location.city}</p>
                                </div>
                                <p id="signup-tags-two">{location.users}</p>
                        
                        </li>
                        ))}
                    </ul>}

            
            </div>



            <div className = "small-container-two" id = "location-board">
                <h1 id="user-leaderboard-title">Behaviour</h1>
                        <button id="see-traffic">See all countries</button>

                        <button
                        className={isButton5Highlighted ? 'highlightedButton' : ''}
                        id ="source-btn"
                        onClick={highlightButton5}
                        >Browser</button>

                        <button
                        className={isButton6Highlighted ? 'highlightedButton' : ''}
                        id ="city-btn"
                        onClick={highlightButton6}
                        >Decides</button>    
                    
                    {isButton5Highlighted ? 
                        <ul className="signup-list-users">
                            {signup.map((location, index) => (
                                <li key={index}>
                                        <div className="signup-bar">
                                            <p id={`signup-tags-${location.width}`} >{location.country}</p>
                                        </div>
                                        <p id="signup-tags-two">{location.users}</p>
                                
                                </li>
                            ))}
                        </ul>
                    : <ul className="signup-list-users">
                    {signup.map((location, index) => (
                        <li key={index}>
                                <div className="signup-bar">
                                    <p id={`signup-tags-${location.width}`} >{location.city}</p>
                                    
                                </div>
                                <p id="signup-tags-two">{location.users}</p>
                        
                        </li>
                        ))}
                    </ul>}

                
                </div>
        </div>
    )
}