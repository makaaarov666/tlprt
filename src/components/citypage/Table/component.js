import React from "react";
import { connect } from "react-redux";
import selectors from "reducers/selectors";
import { array } from "prop-types";

import TableHeader from "../TableHeader";

import styles from "./styles.module.scss";
import TableBody from "../TableBody";

const tableConfig = [
  {
    label: "Taxation label",
    field: "label",
    type: "type",
  },
  {
    label: "value",
    field: "percent_value",
    type: "type",
  },
];

const Table = () => (
  <table className={styles.table}>
    <TableHeader tableConfig={tableConfig} />
    <TableBody tableConfig={tableConfig} />
  </table>
);

Table.propTypes = {
  tax: array,
};

const mapStateToProps = state => ({
  tax: selectors.getTax(state),
});

export default connect(mapStateToProps)(Table);
