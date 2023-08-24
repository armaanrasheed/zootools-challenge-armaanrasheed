import React, { useEffect } from 'react';
import { useState } from 'react';
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
                                tooltip:{
                                    backgroundColor:'white',
                                    bodyColor:'black',
                                    titleColor:'black',
                                    bodyFontColor:'black',
                                    labelColor:'black',
                                    xAlign:'center',
                                    yAlign:'top',
                                    titleAlign:'center',
                                    displayColors:false,
                                    borderWidth:2,
                                    position:'average',
                                    padding:15,
                                    borderColor:'darkgray',
                                    callbacks:{
                                        title: function(tooltipItem, data) {
                                            return 'Day: ' + tooltipItem[0].label + 'th';
                                        },
                                        label: function(tooltipItem, data) {
                                            return 'Signups: ' + tooltipItem.formattedValue;
                                        },
                                    },


                                }
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

    const [isButton1Highlighted,setIsButton1Highlighted] = useState(false);
    const [isButton2Highlighted,setIsButton2Highlighted] = useState(false);
    const [isButton3Highlighted,setIsButton3Highlighted] = useState(true);
    const [isButton4Highlighted,setIsButton4Highlighted] = useState(false);

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
        <div className="container" id="metrics">
            <div id="top-metrics-section">

                <h1 className="title" id="metrics-title">
                    100,000
                </h1>
                <img src="./two-people.png" id="people-icon" alt="People Icon" />
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
