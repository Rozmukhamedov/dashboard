import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const DebetCreditChart: React.FC = () => {
  const labels = [
    "SUPPLIER",
    "SERVICE SALE CLIENT",
    "COMMERCE SALE CLIENT",
    "WAREHOUSE SALE CLIENT",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Example",
        data: [37501, 7000, 4000, 2000],
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderColor: "#007bff",
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 80,
        maxBarThickness: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: "end" as const,
        align: "start" as const,
        font: {
          weight: "bold" as const,
          size: 14,
        },
        formatter: (value: number) => value.toLocaleString("en-US"),
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            weight: "bold" as const,
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <h3 className="text-center text-white bg-dark p-2 mb-5">DEBET-CREDIT</h3>
      <Bar data={data} options={options} />
    </>
  );
};

export default DebetCreditChart;
