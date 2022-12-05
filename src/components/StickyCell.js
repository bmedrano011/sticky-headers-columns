import { TableCell } from "@mui/material";
import React from "react";

function StickyCell(props) {
  const {
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
        backgroundColor: backgroundColor,
        color: color,
        left: left,
        position: position,
        zIndex: zIndex,
        width: width,
      }}
    >
      {props.children}
    </TableCell>
  );
}

export default StickyCell;
