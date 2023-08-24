import React from 'react'
import './globalComponents.css'
import './Navbar.css'


export default function Navbar(){
    const [isButton1Highlighted, setIsButton1Highlighted] = useState(false);
    const [isButton2Highlighted, setIsButton2Highlighted] = useState(false);
    const [isButton3Highlighted, setIsButton3Highlighted] = useState(true);
    const [isButton4Highlighted, setIsButton4Highlighted] = useState(false);

    const highlightButton1 = () => {
        setIsButton1Highlighted(true);
        setIsButton2Highlighted(false);
        setIsButton3Highlighted(false);
        setIsButton4Highlighted(false);
    }
    const highlightButton2 = () => {
        setIsButton1Highlighted(false);
        setIsButton2Highlighted(true);
        setIsButton3Highlighted(false);
        setIsButton4Highlighted(false);
    }
    const highlightButton3 = () => {
        setIsButton1Highlighted(false);
        setIsButton2Highlighted(false);
        setIsButton3Highlighted(true);
        setIsButton4Highlighted(false);
    }
    const highlightButton4 = () => {
        setIsButton1Highlighted(false);
        setIsButton2Highlighted(false);
        setIsButton3Highlighted(false);
        setIsButton4Highlighted(true);
    }

    return (
        <navbar id="navbar">


            <span className = "buttons">
                <h1 id="website-title">Summer referral competition</h1>

                <div id="nav-container">
                    <button className = "nav-button" id="nav-button1" onClick={highlightButton1}>1h</button>
                    <button className = "nav-button" id="nav-button2" onClick={highlightButton2}>24h</button>
                    <button className = "nav-button" id="nav-button3" onClick={highlightButton3}>30d</button>
                    <button className = "nav-button" id="nav-button4" onClick={highlightButton4}>60d</button>
                </div>
            </span>

    





        </navbar>
    )
}