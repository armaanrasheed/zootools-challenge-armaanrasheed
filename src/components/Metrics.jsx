import React, { useEffect } from 'react';
import { data } from './chart.js';
import './globalComponents.css';
import './Metrics.css';
import Chart from 'chart.js/auto';

export default function Metrics() {

    useEffect(() => {
        const createChart = async () => {
            const chartElement = document.getElementById('acquisitions');

            if (chartElement) {
                new Chart(chartElement, {
                    type: 'bar',
                    options: {
                            plugins:{
                                legend:{display:false},
                            },
                            layout:{
                                padding:{
                                    
                                },
                            },
                            scales:{
                                x:{display:false, offset:true, ticks:{stepSize: 5},},
                                y:{display:false, offset:true, ticks:{stepSize: 1000},},
                            },
                            backgroundColor:'rgb(254,213,0)',
                            borderRadius:{
                                topLeft: 10,
                                topRight: 10,
                                bottomLeft: 10,
                                bottomRight: 10,
                            },
                            
                            borderSkipped:false,
                            minBarLength: 2,
                            maintainAspectRatio: false,
                            responsive: true,
                            animation: {
                                duration: 2000,
                                easing: 'easeInOutQuint',
                            },
                    },
            
            
                       
                    data: {
                        labels: data.map((row) => row.day),
                        datasets: [
                            {
                                label: 'Signups',
                                data: data.map((row) => row.signups),
                            },
                        ],
                    },
                });
            }
        };

        createChart();
    }, []);

    return (
        <div className="container" id="metrics">
            <div id="top-metrics-section">
                <h1 className="title" id="metrics-title">
                    100,000
                </h1>
                <img src="./public/images/two-people-icon.svg" id="people-icon" alt="People Icon" />
            </div>
            <div className="title" id="participants-title">
                Participants
            </div>
            <div className="chart-pos">
                <canvas id="acquisitions" height="400"></canvas>
            </div>
        </div>
    );
}
