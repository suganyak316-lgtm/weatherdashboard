const ctx = document.getElementById('tempChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            "00:00","01:00","02:00","03:00",
            "04:00","05:00","06:00","07:00",
            "08:00","09:00","10:00","11:00",
            "12:00","13:00","14:00","15:00",
            "16:00","17:00","18:00","19:00",
            "20:00","21:00","22:00","23:00"
        ],
        datasets: [{
            label: 'Temperature (°C)',
            data: [
                24,24,23.5,23,
                23,23.2,23.5,24,
                25,27,28,27.5,
                29,29,28.5,27,
                27.5,26.8,25.5,24.8,
                24.2,24.1,24,24
            ],
            borderColor: '#5f9dff',
            backgroundColor: 'rgba(95,157,255,0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#5f9dff'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "#bfc7ff"
                },
                grid: {
                    color: "rgba(255,255,255,0.05)"
                }
            },
            y: {
                ticks: {
                    color: "#bfc7ff"
                },
                grid: {
                    color: "rgba(255,255,255,0.05)"
                }
            }
        }
    }
});
