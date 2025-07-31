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

const AdminCostsChart: React.FC = () => {
  const data = {
    labels: ["Debt"],
    datasets: [
      {
        label: "",
        data: [65],
        backgroundColor: "#f97316",
        borderRadius: 4,
        barThickness: 80,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        display: true,
        anchor: "end" as const,
        align: "right" as const,
        color: "black",
        font: {
          weight: "bold" as const,
          size: 16,
        },
        formatter: (value: number) => value.toString(),
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <>
      <h3 className="text-center text-white bg-dark p-2">
        ADMINISTRATIVE COSTS TO DATE
      </h3>
      <div className="card-body d-flex justify-content-center align-items-center flex-column gap-3 mt-5">
        <div className="d-flex gap-3 align-items-center">
          <div className="bg-dark text-warning fw-bold px-4 py-2">
            General ADMIN
          </div>
          <div className="fs-3">→</div>
          <div className="bg-dark text-warning fw-bold px-4 py-2">65</div>
        </div>
        <div className="w-100 mt-4">
          <Bar data={data} options={options} height={100} />
        </div>
      </div>
    </>
  );
};

export default AdminCostsChart;
