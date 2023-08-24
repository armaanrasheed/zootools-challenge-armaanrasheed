import React from 'react'
import Navbar from './components/Navbar.jsx'
import Insights from './components/Insights.jsx'
import Metrics from './components/Metrics.jsx'
import Leaderboard from './components/Leaderboard.jsx'



export default function App(){
    return(
        <div>
            <Navbar />
            <Metrics />
            <Insights />
            <Leaderboard />
        
        </div>
    )
}