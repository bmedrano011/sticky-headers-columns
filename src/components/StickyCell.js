import { TableCell } from "@mui/material";
import React from "react";

function StickyCell(props) {
  const {
    children,
    styles,
    backgroundColor = "#ffffff",
    color = "#000000",
    left = 0,
    position = "sticky",
    zIndex = 1002,
    width = "150px",
  } = props;
  return (
    <TableCell
      style={{
        ...styles,
        backgroundColor: backgroundColor,
        color: color,
        left: left,
        position: position,
        zIndex: zIndex,
        width: width,
      }}
    >
      {children}
    </TableCell>
  );
}

export default StickyCell;
