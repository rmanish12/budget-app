import React from "react";
import moment from "moment";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Checkbox,
  Tooltip,
} from "@material-ui/core";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteIcon from "@material-ui/icons/Delete";

import Pagination from "./Pagination"

import "../../../index.css";

const tableComponent = (props) => {
  const {
    label,
    className,
    itemDetails,
    totalCount,
    type,
    paginationSize,
    paginationParams,
    onCheckedChange,
    onCheckAllItems,
    onRowsPerPageChange,
    onPreviousPage,
    onNextPage
  } = props;

  const { items, numberOfItemsSelected, allItemsSelected } = itemDetails;

  return (
    <>
      <div className="label">{label}</div>
      <TableContainer component={Paper}>
        <Table className={className}>
          <TableHead>
            <TableRow
              className={numberOfItemsSelected > 0 ? "row-selected" : ""}
            >
              <TableCell>
                <Checkbox
                  checked={allItemsSelected}
                  onChange={(e) => onCheckAllItems(e, type)}
                />
              </TableCell>
              <TableCell>
                Date{" "}
                {/* <Tooltip title="Asc/Desc">
                  <ImportExportIcon
                    className="cursor"
                    onClick={(e) => onSortHandler(e, type, "dateOfTransaction")}
                  />
                </Tooltip> */}
              </TableCell>
              <TableCell>Category</TableCell>
              <TableCell>
                Amount{" "}
                {/* <Tooltip title="Asc/Desc">
                  <ImportExportIcon
                    className="cursor"
                    onClick={(e) => onSortHandler(e, type, "amount")}
                  />
                </Tooltip> */}
              </TableCell>
              <TableCell>
                {numberOfItemsSelected > 0 && (
                  <>
                    <Tooltip title="Delete item">
                      <div>
                        <DeleteIcon
                        // onClick={(e) => onDeleteItems(e, type)}
                        />
                        <span>{numberOfItemsSelected}</span>
                      </div>
                    </Tooltip>
                  </>
                )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={index}
                className={item.isChecked ? "row-selected" : ""}
              >
                <TableCell>
                  <Checkbox
                    checked={item.isChecked}
                    onChange={(e) => onCheckedChange(e, type, index)}
                  />
                </TableCell>
                <TableCell align="left">
                  {moment(new Date(item.dateOfTransaction)).format(
                    "DD-MM-YYYY"
                  )}
                </TableCell>
                <TableCell align="left">{item.category}</TableCell>
                <TableCell align="left">{item.amount}</TableCell>
                <TableCell align="left">
                  <Tooltip title="Edit Item">
                    <EditTwoToneIcon
                    // onClick={() => onEdit(item)}
                    />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {items.length !== 0 && (
        <Pagination
          paginationSize={paginationSize}
          paginationParams={paginationParams}
          onRowsPerPageChange={onRowsPerPageChange}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
          type={type}
          length={items.length}
          totalCount={totalCount}
        />
      )}

      {/* <DeleteModal
        show={showDeleteModal}
        handleClose={handleClose}
        onConfirmDelete={onConfirmDelete}
      />  */}
    </>
  );
};

export default React.memo(tableComponent);
