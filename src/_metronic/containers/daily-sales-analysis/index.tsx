import React from "react";
import { Bar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const DailySalesAnalysis: React.FC = () => {
  const labels = [
    "5 июля",
    "4 июля",
    "3 июля",
    "2 июля",
    "1 июля",
    "30 июня",
    "29 июня",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Service sale",
        data: [1200, 950, 800, 1500, 1700, 2100, 46597],
        backgroundColor: "#2e3cfa",
        borderRadius: 4,
        barThickness: 25,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
      {
        label: "Factor ELD and Outsources sale",
        data: [400, 500, 300, 200, 1000, 1300, 2000],
        backgroundColor: "#b00020",
        borderRadius: 4,
        barThickness: 25,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
      {
        label: "Commerce sale",
        data: [900, 600, 700, 850, 1000, 7500, 300],
        backgroundColor: "#f29f05",
        borderRadius: 4,
        barThickness: 25,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
      {
        label: "Selling from warehouse sale",
        data: [300, 250, 400, 350, 200, 500, 600],
        backgroundColor: "#4caf50",
        borderRadius: 4,
        barThickness: 25,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
    
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          boxWidth: 10,
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.formattedValue}`;
          },
        },
      },
      datalabels: {
        rotation: -70,
        display: true,
        color: "#000",
        anchor: "end",
        align: "top",
        offset: 8,
        font: {
          size: 12,
        },
        formatter: function (value: number) {
          return value > 0 ? value.toLocaleString("ru-RU") : "";
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        ticks: {
          font: {
            size: 13,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          font: {
            size: 13,
          },
        },
        grid: {
          display: false,
        },
      },
    }
  };

  return (
      <>
        <h3 className="text-center text-white bg-dark p-2">
          DAILY SALES ANALYSIS
        </h3>
        <Bar data={data} options={options} height={100} />
      </>
  );
};

export default DailySalesAnalysis;
