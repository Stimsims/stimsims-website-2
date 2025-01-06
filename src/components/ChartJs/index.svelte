<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    let chart;

    // Dataset
    const fantasy_data_headers = ["car-brands", "count"];
    const fantasy_data_values = [
        ["australian-vehicle-passanger-car", 35],
        ["european-vehicle-passanger-car", 178],
        ["asian-vehicle-passanger-car", 312],
        ["australian-vehicle-four-wheel-car", 60],
        ["european-vehicle-four-wheel-car", 54],
        ["asian-vehicle-four-wheel-car", 89]
    ];

    // Extracting labels and data
    const labels = fantasy_data_values.map(item => item[0]);
    const dataValues = fantasy_data_values.map(item => item[1]);


    // Function to initialize the chart
    const createChart = (canvas) => {
        chart = new Chart(canvas, {
    "type": "bar",
    "data": {
        "labels": ["Team A", "Team B", "Team C"],
        "datasets": [
            {
                "label": "Match Scores",
                "data": [120, 150, 90],
                "backgroundColor": [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)"
                ],
                "borderColor": [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)"
                ],
                "borderWidth": 1
            }
        ]
    },
    "options": {
        "plugins": {
            "legend": {
                "position": "bottom"
            },
            "title": {
                "display": true,
                "text": "Fantasy Data Scores"
            }
        },
        "scales": {
            "y": {
                "beginAtZero": true
            }
        },
        "responsive": false
    }
});
    };

    onMount(() => {
        const canvas = document.getElementById('chartCanvas');
        createChart(canvas);

        // Cleanup on destroy
        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    });
</script>

<div id="canvas-wrapper">
    <canvas id="chartCanvas" width="400px" height="200ox"></canvas>
</div>

<style>
    canvas {
        max-width: 100%;
        height: "300px"
    }
    #canvas-wrapper{
        width:100%;
        height:"300px";
    }
</style>
