"use client";

import React from 'react';
import {ArcElement, Chart as ChartJS, Tooltip} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Pie} from 'react-chartjs-2';
import {faker} from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const labels = ['Yangi kvartira', 'Uy hovli', 'Yer', 'Noturar joy', 'Dala hovli', 'Davlat auksioni', "Ikkilamchi kvartira"];


export const data = {
    labels,
    datasets: [
        {
            label: 'Soni',
            data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
            backgroundColor: [
                'rgba(255,0,52,0.2)',
                'rgba(0,152,255,0.2)',
                'rgba(255,180,0,0.2)',
                'rgba(0,255,255,0.2)',
                'rgba(16,255,0,0.2)',
                'rgba(0,0,0,0.2)',
                'rgba(255,204,0,0.2)',
            ],
            borderColor: [
                'rgba(255,0,52,0.2)',
                'rgba(0,152,255,0.2)',
                'rgba(255,180,0,0.2)',
                'rgba(0,255,255,0.2)',
                'rgba(16,255,0,0.2)',
                'rgba(0,0,0,0.2)',
                'rgba(255,204,0,0.2)',
            ],
            datalabels: {
                formatter: (value: number, context: object) => {
                    // @ts-ignore
                    const datapoints = context.chart.data.datasets[0].data;

                    function totalSum(total: number, datapoint: number) {
                        return total + datapoint;
                    };
                    const totalValue = datapoints.reduce(totalSum, 0);
                    const percentageValue = (value / totalValue * 100).toFixed(1);
                    return `Soni: ${value}, foizda: ${percentageValue}%`;
                }
            }
        },
    ],
};

const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Sotilayotgan obyekt maydoni taqsimlanish diagrammasi"
            }
        }
    }

export function PieChartSell() {
    return <Pie data={data} options={options}/>;
}
