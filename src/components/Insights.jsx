import React from 'react'
import './globalComponents.css'
import './Insights.css'
import { useState } from 'react'


export default function Insights(){
    return (
        <div className="container" id="insights">
                <h1 className = "title" id="insights-title">ZooTools insights</h1>
                <p id="cta">Making analytics simple and actionable</p>
                    <div className = "insight-main-container">

                            <div className="insight-container">
                                <h2 id="summary-title">Summary</h2>
                                <ul className="insight-list">
                                    <li className="insight-item">
                                        <div className="insight-line">

                                            <img src="./images/down-trend.png" id = "insight-img-one"></img>
                                            <p id="insight-text-one"><strong>Signups are slowing down.</strong> -5% new than last week</p>

                                        </div>
                                        <div className="insight-line">

                                            <img src="./images/up-trend.png" id = "insight-img-one"></img>
                                            <p id="insight-text-one"><strong>80%</strong> of your signups were invited by other members.</p>

                                        </div>
                                        <div className="insight-line">

                                            <img src="./images/star.png" id = "insight-img-one"></img>
                                            <p id="insight-text-one"><strong>80%</strong> of your signups were invited by other members.</p>

                                        </div>
                                        <div className="insight-line">

                                            <img src="./images/star.png" id = "insight-img-one"></img>
                                            <p id="insight-text-one"><strong>80%</strong> of your signups were invited by other members.</p>

                                        </div>
                                    </li>
                                </ul>
                                
                            </div>

                            <div className="recommendation-container">
                                <h1 id="summary-title">Recommendation</h1>
                                <h4 id="promote-text">Make sure to promote and <u>share your form</u></h4>
                                <h4 id="promote-text">Congrats this is huge! Keep giving rewards for your users.</h4>

                            </div>
                    </div>
        </div>
                
    )
}