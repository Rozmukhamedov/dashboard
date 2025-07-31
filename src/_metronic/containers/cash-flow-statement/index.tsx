import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CashFlowStatement: React.FC = () => {
  const balances = [
    { label: "Bank USD", value: 5145.16, currency: "USD", positive: true },
    { label: "Bank UZS", value: 11953043.61, currency: "UZS", positive: true },
    { label: "Bank EUR", value: 460.89, currency: "EUR", positive: true },
    {
      label: "Starway Zelle",
      value: 55038.68,
      currency: "USD",
      positive: false,
    },
    { label: "HBH Zelle", value: -1221.68, currency: "USD", positive: false },
    {
      label: "Blue Star Zelle",
      value: -58671.84,
      currency: "USD",
      positive: false,
    },
    {
      label: "AVENTIS GROUP USD",
      value: 10000.0,
      currency: "USD",
      positive: false,
    },
    {
      label: "AVENTIS GROUP SUM",
      value: 11953043.61,
      currency: "UZS",
      positive: false,
    },
    {
      label: "AVENTIS GROUP EUR",
      value: 460.89,
      currency: "EUR",
      positive: false,
    },
  ];

  const pieData = {
    labels: ["Чиқим", "Кирим"],
    datasets: [
      {
        data: [20000, 41449],
        backgroundColor: ["#2e3cfa", "#ffe066"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
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
        STATEMENT OF CASH FLOWS
      </h3>

      <div className="row my-3 text-center">
        <div className="col-md-4">
          <button className="btn btn-success w-100 fw-bold">
            3 TABLE OF COSTS
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-success w-100 fw-bold">
            CURRENT MONEY HOLDER
          </button>
            <ul className="list-group mt-5">
              {balances.map((item, i) => (
                <li
                  key={i}
                  className={`list-group-item d-flex justify-content-between align-items-center position-relative ${
                    item.positive
                      ? "list-group-item-success"
                      : "list-group-item-secondary"
                  }`}
                >
                  <span className="fs-3 fw-semibold">{item.label}</span>
                  <span className="fs-3 fw-semibold position-absolute top-0" style={{marginTop: 5, right: 170}}>{`->`}</span>
                  <span
                    className="fs-3 fw-semibold"
                  >
                    {item.value.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
        </div>
        <div className="col-md-4">
          <button className="btn btn-success w-100 fw-bold">
            INCOME AND OUTPUT STATEMENT
          </button>
          <div className="w-100 d-flex justify-content-between align-items-center mt-5">
            <div className="mx-auto">
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashFlowStatement;
