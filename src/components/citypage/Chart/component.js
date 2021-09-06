import React from "react";
import { connect } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import selectors from "reducers/selectors";

import styles from "./styles.module.scss";

const data = ({ salaries }) => {
  const a = salaries.percentile_25;
  const b = salaries.percentile_50;
  const c = salaries.percentile_75;

  return [
    {
      name: "0%",
      USD: 0,
    },
    {
      name: "25%",
      USD: a,
    },
    {
      name: "50%",
      USD: b,
    },
    {
      name: "75%",
      USD: c,
    },
    {
      name: "100%",
      USD: (a + b + c) / 3,
    },
  ];
};

const Chart = salaries => (
  <>
    <p className={styles.discription}>
      25th, 50th, 75th percentile for urban area salaries
    </p>
    <AreaChart
      width={550}
      height={400}
      data={data(salaries)}
      margin={{
        top: 30,
        right: 30,
        left: 30,
        bottom: 0,
      }}
      // {...chartProps} //TODO: вынести стили в константы.
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="USD" stroke="#8884d8" fill="#e9f59d" />
    </AreaChart>
  </>
);

const mapStateToProps = state => ({ salaries: selectors.getSalaries(state) });

export default connect(mapStateToProps)(Chart);
