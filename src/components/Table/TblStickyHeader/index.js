import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import StickyCell from "../../StickyCell";

export default function TblStickyHeader(props) {
  const {
    headerCells,
    numSelected,
    onRequestSort,
    onSelectAllClick,
    order,
    orderBy,
    rowCount,
  } = props;

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <StickyCell>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
            {headerCells
              .filter((header) => header.sticky === true)
              .map((header, index) => (
                <TableCell
                  key={header.id}
                  sortDirection={orderBy === header.id ? order : false}
                  sx={header.id !== "id" ? { width: "250px" } : { width: "0" }}
                >
                  <TableSortLabel
                    active={orderBy === header.id}
                    direction={orderBy === header.id ? order : "asc"}
                    onClick={createSortHandler(header.id)}
                  >
                    {header.label}
                  </TableSortLabel>
                </TableCell>
              ))}
          </StickyCell>
          {headerCells
            .filter((header) => header.sticky === false)
            .map((header) => (
              <TableCell
                key={header.id}
                sortDirection={orderBy === header.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === header.id}
                  direction={orderBy === header.id ? order : "asc"}
                  onClick={createSortHandler(header.id)}
                >
                  {header.label}
                </TableSortLabel>
              </TableCell>
            ))}
        </TableRow>
      </TableHead>
    </>
  );
}
