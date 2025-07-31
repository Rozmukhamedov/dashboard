import { useIntl } from "react-intl";
import { ESInput } from "../../components";
import { Content } from "../../../_metronic/layout/components/content";
import CashFlowStatement from "../../../_metronic/containers/cash-flow-statement";
import DailySalesAnalysis from "../../../_metronic/containers/daily-sales-analysis";
import BlocksAnalysisTable from "../../../_metronic/containers/blocks-analysis-table";
import AdminCostsChart from "../../../_metronic/containers/admin-costs-chart";
import SalesMarginAnalysis from "../../../_metronic/containers/sales-margin-analysis";
import DividendAnalysis from "../../../_metronic/containers/dividend-analysis";
import IndicatorBox from "../../../_metronic/containers/indicator-box";
import DebetCreditChart from "../../../_metronic/containers/debet-credit-chart";
import GeneralIndications from "../../../_metronic/containers/general-indications";
import { useEffect, useState } from "react";
import axios from "axios";

const SHEET_ID = "1ZuPEe7NJSIuKCumkggzSNoAz2KcPdIc7v9CQMmLh21g";
const API_KEY = "AIzaSyA1LD24s8lpc9U59WlfFA4JlPDUmvR1s_U";
const RANGE = "Sheet1!A1:E20";

const DashboardWrapper = () => {
  const intl = useIntl();

  const [rows, setRows] = useState<string[][]>([]);

async function getSheetData() {
  // 1. Получаем список листов
  const meta = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}`
  );
  const sheetName = meta.data.sheets[0].properties.title;

  // 2. Загружаем данные
  const res = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/'${sheetName}'!A:Z?key=${API_KEY}`
  );

  return res.data.values;
}

getSheetData().then(console.log);

  return (
    <>
      <Content>
        <div className="d-flex align-items-center jutify-content-end mb-5 w-100">
          <ESInput
            type="date"
            placeholder={intl.formatMessage({ id: "COMMON.SEARCH" })}
            className="form-control-solid w-200px ms-auto"
            onChange={(e) => console.log({ date: e.target.value })}
          />
        </div>
        <div className="mb-5">
          <CashFlowStatement />
        </div>
        <div className="mb-5">
          <DailySalesAnalysis />
        </div>
        <div className="mb-5">
          <BlocksAnalysisTable />
        </div>
        <div className="mb-5">
          <AdminCostsChart />
        </div>
        <div className="mb-5">
          <SalesMarginAnalysis />
        </div>
        <div className="mb-5">
          <DividendAnalysis />
        </div>
        <div className="mb-5">
          <IndicatorBox />
        </div>
        <div className="mb-5">
          <DebetCreditChart />
        </div>
        <div className="mb-5">
          <GeneralIndications />
        </div>
      </Content>
    </>
  );
};

export { DashboardWrapper };
