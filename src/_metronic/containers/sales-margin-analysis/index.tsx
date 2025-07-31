import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

// Данные для одного бара
const SaleBar: React.FC<{ label: string; values?: number[] }> = ({
  label,
  values = [0, 0, 0],
}) => {
  const data = {
    labels: [label],
    datasets: [
      {
        label: "Продажа",
        data: [values[0]],
        backgroundColor: "#701a75",
        barThickness: 24,
        borderRadius: 4,
        maxBarThickness: 20,
      },
      {
        label: "Таннарх",
        data: [values[1]],
        backgroundColor: "#f97316",
        barThickness: 24,
        borderRadius: 4,
        maxBarThickness: 20,
      },
      {
        label: "Маржа",
        data: [values[2]],
        backgroundColor: "#fef9c3",
        borderColor: "#ccc",
        borderWidth: 1,
        barThickness: 24,
        borderRadius: 4,
        maxBarThickness: 20,
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
        color: "#000",
        anchor: "center" as const,
        align: "center" as const,
        font: {
          size: 12,
          weight: "bold" as const,
        },
        formatter: (value: number) => (value > 0 ? value.toString() : ""),
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ margin: "0 12px" }}
    >
      <div style={{ width: 200, height: 100 }}>
        <Bar data={data} options={options} />
      </div>
      <div
        className="text-center mt-2 small fw-semibold"
        style={{ maxWidth: 180 }}
      >
        {label}
      </div>
    </div>
  );
};

const SalesMarginAnalysis: React.FC = () => {
  return (
    <>
      <h3 className="text-center text-white bg-dark p-2">
        SALES AND MARGIN ANALYSIS
      </h3>
      <div className="card-body text-center">
        <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
          <div className="bg-success text-white px-4 py-2 fw-bold">
            Total sale
          </div>
          <div className="fs-4">→</div>
          <div className="bg-success text-white px-4 py-2 fw-bold">
            0
          </div>
        </div>

        <div className="d-flex justify-content-center gap-4 mb-4">
          <div className="d-flex align-items-center gap-2">
            <div
              className="rounded-circle"
              style={{ backgroundColor: "#701a75", width: 12, height: 12 }}
            />
            <span className="small">Продажа</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div
              className="rounded-circle"
              style={{ backgroundColor: "#f97316", width: 12, height: 12 }}
            />
            <span className="small">Таннарх</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div
              className="rounded-circle"
              style={{
                backgroundColor: "#fef9c3",
                width: 12,
                height: 12,
                border: "1px solid #ccc",
              }}
            />
            <span className="small">Маржа</span>
          </div>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-4">
          <SaleBar label="Service sale" values={[200, 100, 100]} />
          <SaleBar
            label="Factor ELD and Outsources sale"
            values={[20, 10, 10]}
          />
          <SaleBar label="Commerce sale" values={[20, 10, 10]} />
          <SaleBar label="Selling from warehouse sale" values={[20, 10, 10]} />
        </div>
      </div>
    </>
  );
};

export default SalesMarginAnalysis;
