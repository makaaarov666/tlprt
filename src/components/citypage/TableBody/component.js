import React from "react";
import { connect } from "react-redux";
import selectors from "reducers/selectors";
import { array } from "prop-types";

const getfilterData = (tax, tableConfig) => {
  const filterData = tax
    .filter(taxation => taxation.type == "percent")
    .map(taxation => {
      const rows = tableConfig.map(({ field }) => {
        if (field == "percent_value") {
          return taxation[field];
        }
      });

      return <td key={taxation.id}>{rows}</td>;
    });

  return <tr>{filterData}</tr>;
};

const TableBody = ({ tax, tableConfig }) => (
  <tbody>{getfilterData(tax, tableConfig)}</tbody>
);

TableBody.propTypes = {
  tax: array,
  tableConfig: array,
};

const mapStateToProps = state => ({
  tax: selectors.getTax(state),
});

export default connect(mapStateToProps)(TableBody);
