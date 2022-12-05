import { TableCell } from "@mui/material";
import React from "react";

function StickyCell(props) {
  return (
    <TableCell style={{ ...props.styles, left: 0, position: "sticky" }}>
      {props.children}
    </TableCell>
  );
}

export default StickyCell;
