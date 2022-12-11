import { Table, TableContainer } from "@mui/material";
import React from "react";

function TblContainer({ children, size, maxHeight }) {
  return (
    <TableContainer sx={{ maxHeight: maxHeight ? maxHeight : 650 }}>
      <Table stickyHeader size={size ? size : "small"}>
        {children}
      </Table>
    </TableContainer>
  );
}

export default TblContainer;
