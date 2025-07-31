import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const DividendAnalysis: React.FC = () => {
  const totalData = {
    labels: ["Accrued dividend", "Paid dividend"],
    datasets: [
      {
        label: "Total",
        data: [621738, 331136],
        backgroundColor: "#801336",
        borderRadius: 4,
        barThickness: 80,
      },
    ],
  };

  const totalOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `$${ctx.raw.toLocaleString()}`,
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold" as const,
          size: 14,
        },
        formatter: (value: number) => `$${value.toLocaleString()}`,
      },
    },
    scales: {
      x: {
        ticks: { font: { size: 14 } },
      },
      y: {
        ticks: {
          callback: function (value: number) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  const monthData = {
    labels: ["Accrued dividend", "Paid dividend"],
    datasets: [
      {
        label: "This Month",
        data: [0, 0],
        backgroundColor: "#801336",
        borderRadius: 4,
        barThickness: 80,
      },
    ],
  };

  const monthOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: () => `$0`,
        },
      },
      annotation: {
        annotations: {
          line: {
            type: "line",
            yMin: 1,
            yMax: 1,
            borderColor: "#22c55e",
            borderDash: [6, 6],
            borderWidth: 2,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { font: { size: 14 } },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <>
      <h3 className="text-center text-white bg-dark p-2">DIVIDEND ANALYSIS</h3>
      <div className="row mt-5">
        {/* Total Dividend */}
        <div className="col-md-6">
          <h6 className="text-center fw-bold mb-3">Total dividend</h6>
          <Bar data={totalData} options={totalOptions as any} />
        </div>

        {/* This Month's Dividend */}
        <div className="col-md-6">
          <h6 className="text-center fw-bold mb-3">This month's dividend</h6>
          <Bar data={monthData} options={monthOptions as any} />
        </div>
      </div>
    </>
  );
};

export default DividendAnalysis;
