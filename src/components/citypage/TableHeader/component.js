import React from "react";
import { connect } from "react-redux";
import selectors from "reducers/selectors";
import { array } from "prop-types";

const getfilterData = (tax, tableConfig) => {
  const filterData = tax
    .filter(taxation => taxation.type == "percent")
    .map(taxation => {
      const rows = tableConfig.map(({ field }) => {
        if (field == "label") {
          return taxation[field];
        }
      });

      return <td key={taxation.id}>{rows}</td>;
    });

  return <tr>{filterData}</tr>;
};

const TableHeader = ({ tax, tableConfig }) => (
  <thead>{getfilterData(tax, tableConfig)}</thead>
);

TableHeader.propTypes = {
  tax: array,
  tableConfig: array,
};

const mapStateToProps = state => ({
  tax: selectors.getTax(state),
});

export default connect(mapStateToProps)(TableHeader);
