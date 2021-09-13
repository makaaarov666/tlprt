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

import useWindowDimensions from "hooks/useWindowDimensions";

import styles from "./styles.module.scss";

const chartMargin = {
  margin: {
    top: 30,
    right: 0,
    left: 0,
    bottom: 0,
  },
};

const getChartData = ({ salaries }) => {
  const { percentile_25, percentile_50, percentile_75 } = salaries;
  const percentile_100 = (percentile_25 + percentile_50 + percentile_75) / 3;

  return [
    {
      name: "0%",
      USD: 0,
    },
    {
      name: "25%",
      USD: percentile_25,
    },
    {
      name: "50%",
      USD: percentile_50,
    },
    {
      name: "75%",
      USD: percentile_75,
    },
    {
      name: "100%",
      USD: percentile_100,
    },
  ];
};

const getChartSize = width => {
  if (width <= 580) {
    return { width: 200, height: 150 };
  }

  if (width <= 771) {
    return { width: 350, height: 200 };
  }

  return { width: 550, height: 400 };
};

const chartProps = width => {
  const chartSize = getChartSize(width);

  return {
    ...chartSize,
    ...chartMargin,
  };
};

const Chart = salaries => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.chartContainer}>
      <p className={styles.discription}>
        25th, 50th, 75th percentile for urban area salaries
      </p>
      <AreaChart {...chartProps(width)} data={getChartData(salaries)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="USD" stroke="#8884d8" fill="#e9f59d" />
      </AreaChart>
    </div>
  );
};

const mapStateToProps = state => ({ salaries: selectors.getSalaries(state) });

export default connect(mapStateToProps)(Chart);
