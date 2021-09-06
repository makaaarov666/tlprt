import React from "react";
import { connect } from "react-redux";
import selectors from "reducers/selectors";
import { array } from "prop-types";

import styles from "./styles.module.scss";

// const tableConfig = [
//   {
//     label: "Pizza name",
//     field: "name",
//   },
//   {
//     label: "weight",
//     field: "weight",
//   },
//   {
//     label: "Pizza size",
//     field: "size",
//   },
// ];

// const pizzas = [
//   {
//     name: "peperoni",
//     weghit: 100,
//     size: "s",
//   },
//   {
//     name: "myasnaia",
//     weghit: 300,
//     size: "xl",
//   },
//   {
//     name: "cheeses",
//     weghit: 200,
//     size: "xxl",
//   },
// ];

// const getTableData = () => {
//   const data = pizzas.map(pizza => {
//     const rows = tableConfig.map(({ field }) => pizza[field]);

//     return rows;
//   });

//   return data;
// };

const renderRowHead = ({ label, id }) => <th key={id}>{label}</th>;

const renderRowBody = tax => {
  const { type, id } = tax;

  const value = tax[`${type}_value`];

  return (
    <td key={id} className={styles.value}>
      {value}
    </td>
  );
};

const renderRowDiscription = tax => {
  const { type, id } = tax;

  return (
    <td key={id} className={styles.discription}>
      {type}
    </td>
  );
};

const Table = ({ tax }) => {
  if (!tax || !tax.length) {
    return null;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>{tax.map(renderRowHead)}</tr>
      </thead>
      <tbody>
        <tr>{tax.map(renderRowBody)}</tr>
        <tr>{tax.map(renderRowDiscription)}</tr>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tax: array,
};

const mapStateToProps = state => ({
  tax: selectors.getTax(state),
});

export default connect(mapStateToProps)(Table);
