import { Table, TableContainer } from "@mui/material";
import React from "react";

function TblContainer({ children, size }) {
  return (
    <TableContainer sx={{ maxHeight: 650 }}>
      <Table stickyHeader size={size ? size : "small"}>
        {children}
      </Table>
    </TableContainer>
  );
}

export default TblContainer;
