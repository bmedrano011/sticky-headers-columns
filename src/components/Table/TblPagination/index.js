import { TablePagination } from "@mui/material";
import React from "react";

function TblPagination(props) {
  const {
    recordsCount,
    page,
    pages,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;

  return (
    <TablePagination
      component="div"
      count={recordsCount}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      labelDisplayedRows={({ from, to, count }) =>
        `Viewing ${from > to ? to : from} - ${to} of ${count} | Showing ${
          rowsPerPage > count ? count : rowsPerPage
        } Results`
      }
    />
  );
}

export default TblPagination;
