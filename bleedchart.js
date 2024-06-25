// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('bloodBuildupChart').getContext('2d');
            const bloodBuildupChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [10, 20, 30, 40, 50, 60],
                    datasets: [
                        {
                            label: 'Hookclaws (Bloodflame Blade)',
                            data: [140, 160, 180, 200, 220, 240],
                            borderColor: 'darkred',
                            backgroundColor: 'rgba(139, 0, 0, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Hookclaws (Bleed Grease)',
                            data: [125, 140, 155, 170, 185, 200],
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Uchigatana (Bloodflame Blade)',
                            data: [125, 145, 165, 185, 205, 225],
                            borderColor: 'blue',
                            backgroundColor: 'rgba(0, 0, 255, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Uchigatana (Bleed Grease)',
                            data: [110, 125, 140, 155, 170, 185],
                            borderColor: 'lightblue',
                            backgroundColor: 'rgba(173, 216, 230, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Morning Star (Bloodflame Blade)',
                            data: [130, 150, 170, 190, 210, 230],
                            borderColor: 'orange',
                            backgroundColor: 'rgba(255, 165, 0, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Morning Star (Bleed Grease)',
                            data: [115, 130, 145, 160, 175, 190],
                            borderColor: 'darkorange',
                            backgroundColor: 'rgba(255, 140, 0, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Flamberge (Bloodflame Blade)',
                            data: [135, 155, 175, 195, 215, 235],
                            borderColor: 'purple',
                            backgroundColor: 'rgba(128, 0, 128, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Flamberge (Bleed Grease)',
                            data: [120, 135, 150, 165, 180, 195],
                            borderColor: 'violet',
                            backgroundColor: 'rgba(238, 130, 238, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Twinblade (Bloodflame Blade)',
                            data: [113, 133, 153, 173, 193, 213],
                            borderColor: 'darkgoldenrod',
                            backgroundColor: 'rgba(184, 134, 11, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Twinblade (Bleed Grease)',
                            data: [98, 113, 128, 143, 158, 173],

                            borderColor: 'gold',
                            backgroundColor: 'rgba(255, 215, 0, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Nightrider Flail (Bloodflame Blade)',
                            data: [135, 155, 175, 195, 215, 235],
                            borderColor: 'brown',
                            backgroundColor: 'rgba(165, 42, 42, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Nightrider Flail (Bleed Grease)',
                            data: [120, 135, 150, 165, 180, 195],
                            borderColor: 'lightbrown',
                            backgroundColor: 'rgba(222, 184, 135, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Great Épée (Bloodflame Blade)',
                            data: [113, 133, 153, 173, 193, 213],
                            borderColor: 'indigo',
                            backgroundColor: 'rgba(75, 0, 130, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Great Épée (Bleed Grease)',
                            data: [98, 113, 128, 143, 158, 173],
                            borderColor: 'darkslateblue',
                            backgroundColor: 'rgba(72, 61, 139, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Misericorde (Bloodflame Blade)',
                            data: [113, 133, 153, 173, 193, 213],
                            borderColor: 'darkcyan',
                            backgroundColor: 'rgba(0, 139, 139, 0.2)',
                            borderWidth: 2,
                            fill: true
                        },
                        {
                            label: 'Misericorde (Bleed Grease)',
                            data: [98, 113, 128, 143, 158, 173],
                            borderColor: 'cyan',
                            backgroundColor: 'rgba(0, 255, 255, 0.2)',
                            borderWidth: 2,
                            fill: true
                        }
                    ]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Arcane Stat Investment'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Blood Buildup (60 seconds)'
                            },
                            min: 90,
                            max: 250,
                            ticks: {
                                stepSize: 20
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            onHover: function(event, legendItem) {
                                const index = legendItem.datasetIndex;
                                const chart = legendItem.chart;
                                chart.data.datasets.forEach((dataset, i) => {
                                    if (i !== index) {
                                        chart.getDatasetMeta(i).hidden = true;
                                        chart.getDatasetMeta(i).opacity = 0.5;
                                    }
                                });
                                chart.update();
                            },
                            onLeave: function(event, legendItem) {
                                const chart = legendItem.chart;
                                chart.data.datasets.forEach((dataset) => {
                                    dataset.hidden = null;
                                    dataset.opacity = 1;
                                });
                                chart.update();
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        });