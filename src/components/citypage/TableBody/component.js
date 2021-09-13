import React from "react";
import { connect } from "react-redux";
import selectors from "reducers/selectors";
import { array, object } from "prop-types";

const getfilterData = (tax, tableConfig) => {
  console.log(tax);
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

  return (
    <tr>
      <th>{filterData}</th>
    </tr>
  );
};

const TableBody = ({ tax, tableConfig }) => (
  <tbody>{getfilterData(tax, tableConfig)}</tbody>
);

TableBody.propTypes = {
  tax: array,
  tableConfig: object,
};

const mapStateToProps = state => ({
  tax: selectors.getTax(state),
});

export default connect(mapStateToProps)(TableBody);
