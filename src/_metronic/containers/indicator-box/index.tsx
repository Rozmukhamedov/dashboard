import React from "react";

const IndicatorBox = ({
  label,
  value,
  bgColor,
}: {
  label: string;
  value: string | number;
  bgColor: string;
}) => {
  return (
    <div
      className="d-flex flex-column align-items-center px-3"
      style={{ minWidth: 120 }}
    >
      <div
        className="px-3 py-1 mb-2 fw-semibold text-center"
        style={{
          backgroundColor: bgColor,
          borderRadius: 2,
          minWidth: 120,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 22, color: "red", marginBottom: 4 }}>↓</div>
      <div
        className="text-center fw-bold"
        style={{
          fontSize: 20,
          borderBottom: "2px solid orange",
          width: "100%",
        }}
      >
        {value}
      </div>
    </div>
  );
};


const InvoicesSummary: React.FC = () => {
  return (
    <>
      <h3 className="text-center text-white bg-dark p-2">INVOICES ANALYSIS</h3>

      <div className="d-flex justify-content-center gap-5 flex-wrap col-md-6 col-12 mt-5">
        <IndicatorBox label="Company count" value={1} bgColor="#bfbfbf" />
        <IndicatorBox label="Trucks count" value={2} bgColor="#fde9d9" />
        <IndicatorBox label="Sales amount" value="$0" bgColor="#e6f2e6" />
      </div>
    </>
  );
};

export default InvoicesSummary;
