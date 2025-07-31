import React from "react";

const data = [
  {
    label: "Service sale",
    sale: 665221,
    cost: 0,
  },
  {
    label: "Factor ELD and Outsources sale",
    sale: 726628,
    cost: 151916,
  },
  {
    label: "Commerce sale",
    sale: 74889,
    cost: 44090,
  },
  {
    label: "Selling from warehouse sale",
    sale: 0,
    cost: 0,
  },
  {
    label: "",
    sale: 0,
    cost: 0,
  },
];

const formatNumber = (num: number) => num.toLocaleString("en-US");

const GeneralIndications: React.FC = () => {
  const totalSale = data.reduce((acc, row) => acc + row.sale, 0);
  const totalCost = data.reduce((acc, row) => acc + row.cost, 0);
  const totalProfit = totalSale - totalCost;
  const totalProfitPercent = totalSale ? Math.round((totalProfit / totalSale) * 100) : 0;

  return (
    <>
      <div className="text-white text-center fw-bold py-2" style={{ backgroundColor: "#003300" }}>
        - GENERAL INDICATIONS -
      </div>
      <div className="d-flex justify-content-center align-items-center gap-2 my-3">
        <div className="px-3 py-1 text-white fw-bold" style={{ backgroundColor: "#660000" }}>
          19.05.2025
        </div>
        <span className="fw-bold">-</span>
        <div className="px-3 py-1 text-white fw-bold" style={{ backgroundColor: "#660000" }}>
          19.05.2025
        </div>
      </div>
      <div className="row text-center fw-bold">
        <div className="col-md-4">
          <div className="py-2 text-white" style={{ backgroundColor: "#3cb371", border: "1px solid #3cb371" }}>SALE</div>
          <div className="py-2 fw-bold fs-2" style={{border: "1px solid #3cb371"}}>{formatNumber(totalSale)}</div>
        </div>
        <div className="col-md-4">
          <div className="py-2 text-white" style={{ backgroundColor: "#d00000" }}>COSTS</div>
          <div className="py-2 fw-bold fs-2"  style={{border: "1px solid #d00000"}}>{formatNumber(totalCost)}</div>
        </div>
        <div className="col-md-4">
          <div className="py-2 text-white" style={{ backgroundColor: "#facc15", border: "1px solid #facc15" }}>GROSS PROFIT</div>
          <div className="py-2 fw-bold fs-2 d-flex justify-content-between align-items-center" style={{border: "1px solid #facc15"}}>
            <span>{formatNumber(totalProfit)}</span>
            <span>{totalProfitPercent}%</span>
          </div>
        </div>
      </div>
      <div className="row mt-3 text-center small">
        {data.map((row, idx) => {
          const profit = row.sale - row.cost;
          const percent = row.sale ? Math.round((profit / row.sale) * 100) : 0;
          return (
            <React.Fragment key={idx}>
              <div className="col-md-4 d-flex justify-content-between px-5 fs-4">
                <span className="text-success">-{row.label}</span>
                <span className="text-success">→</span>
                <span className="text-success fw-bold">{formatNumber(row.sale)}</span>
              </div>
              <div className="col-md-4  fs-4">
                <span className="text-danger fw-bold">{row.cost ? formatNumber(row.cost) : 0}</span>
              </div>
              <div className="col-md-4 d-flex justify-content-between px-5  fs-4">
                <span className="text-warning fw-bold">{profit ? formatNumber(profit) : 0}</span>
                <span className="text-warning">{percent}%</span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default GeneralIndications;