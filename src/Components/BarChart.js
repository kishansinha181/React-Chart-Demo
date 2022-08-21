import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
const BarChart = () => {
    return <div>
       
        <Bar
        data = {{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Profit in Million Dollars',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'],
                borderWidth: 2

                

                
            }]
        }}
        height={400}
        width={600}
        options={{
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }}
        />
    </div>
}

export default BarChart;