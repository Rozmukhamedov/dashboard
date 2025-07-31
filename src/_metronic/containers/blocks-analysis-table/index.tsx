import React from "react";

const BlocksAnalysisTable: React.FC = () => {
  const rows = [
    {
      block: "SUM",
      all: [2101, 458, 1, 0],
      tt: [430, 60, 1, 0],
      factor: [1671, 398, 0, 0],
    },
    {
      block: "A",
      all: [488, 77, 1, 0],
      tt: [112, 13, 1, 0],
      factor: [376, 64, 0, 0],
    },
    {
      block: "A1",
      all: [238, 94, 0, 0],
      tt: [18, 10, 0, 0],
      factor: [220, 84, 0, 0],
    },
    {
      block: "B",
      all: [467, 69, 0, 0],
      tt: [21, 5, 0, 0],
      factor: [446, 64, 0, 0],
    },
    {
      block: "B1",
      all: [445, 117, 0, 0],
      tt: [116, 22, 0, 0],
      factor: [329, 95, 0, 0],
    },
    {
      block: "C",
      all: [463, 101, 0, 0],
      tt: [163, 10, 0, 0],
      factor: [300, 91, 0, 0],
    },
    {
      block: "D",
      all: [0, 0, 0, 0],
      tt: [0, 0, 0, 0],
      factor: [0, 0, 0, 0],
    },
    {
      block: "Leader",
      all: [0, 0, 0, 0],
      tt: [0, 0, 0, 0],
      factor: [0, 0, 0, 0],
    },
  ];

  const renderRow = (r: (typeof rows)[0], i: number) => (
    <tr key={i}>
      <th>{r.block}</th>
      {r.all.map((v, i) => (
        <td key={`all-${i}`}>{v}</td>
      ))}
      {r.tt.map((v, i) => (
        <td key={`tt-${i}`}>{v}</td>
      ))}
      {r.factor.map((v, i) => (
        <td key={`factor-${i}`}>{v}</td>
      ))}
    </tr>
  );

  return (
    <>
      <h3 className="text-center text-white bg-dark p-2">BLOCS ANALYSIS</h3>
      <div className="card-body table-responsive my-3">
        <table className="table table-bordered table-hover align-middle text-center">
          <thead className="align-middle fw-bold text-muted bg-light">
            <tr>
              <th rowSpan={2}>Blocks</th>
              <th colSpan={4}>ALL</th>
              <th colSpan={4}>TT ELD</th>
              <th colSpan={4}>FACTOR ELD</th>
            </tr>
            <tr>
              <th>Number of trucks</th>
              <th>Number of companies</th>
              <th>New joined companies</th>
              <th>Deactivated companies</th>
              <th>Number of trucks</th>
              <th>Number of companies</th>
              <th>New joined companies</th>
              <th>Deactivated companies</th>
              <th>Number of trucks</th>
              <th>Number of companies</th>
              <th>New joined companies</th>
              <th>Deactivated companies</th>
            </tr>
          </thead>
          <tbody>{rows.map(renderRow)}</tbody>
        </table>
      </div>
    </>
  );
};

export default BlocksAnalysisTable;
