import React from "react";

import { Select, MenuItem } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "../../../index.css";

const pagination = (props) => {
  const {
    type,
    totalCount,
    length,
    paginationParams,
    paginationSize,
    onRowsPerPageChange,
    onPreviousPage,
    onNextPage,
  } = props;

  const { limit, page } = paginationParams;

  return (
    <>
      <div>
        <div className="right-align">
          <span className="pagination-label">Rows per page:</span>
          <Select
            id="itemsPerPage"
            name="itemsPerPage"
            value={limit}
            onChange={(e) => onRowsPerPageChange(e, type)}
            className="pagination-dropdown"
          >
            {paginationSize.map((category, index) => {
              return (
                <MenuItem value={category} key={index}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
          <span className="pagination-label">{`${page * limit + 1} - ${
            page * limit + length
          } of ${totalCount}`}</span>
          <span className="pagination-previous">
            <NavigateBeforeIcon onClick={() => onPreviousPage(type)} />
          </span>
          <span className="pagination-next">
            <NavigateNextIcon onClick={() => onNextPage(type)} />
          </span>
        </div>
      </div>
    </>
  );
};

export default pagination;
