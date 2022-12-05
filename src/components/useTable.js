import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import StickyCell from "./StickyCell";

export default function useStickyTable(
  records,
  headers,
  pagesCount,
  onSelectAll
) {
  const pages = [
    pagesCount,
    pagesCount * 2,
    pagesCount * 3,
    { label: "All", value: records.length },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [order, setOrder] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (records.length === 0) {
      setSelectAll(false);
    }
  }, [records]);

  useEffect(() => {
    const pageWithLoading =
      page > 0 && records.length <= rowsPerPage ? 0 : page;
    setPage(pageWithLoading);
  }, [page, records.length, rowsPerPage]);

  const handleSort = (cellId) => (e) => {
    const asc = orderBy === cellId && order === "asc";

    setOrder(asc ? "desc" : "asc");
    setOrderBy(cellId);

    stableSort(records, getComparator(order, orderBy)).splice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectAll = () => {
    onSelectAll(!selectAll);
    setSelectAll(!selectAll);
  };

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const recordsAfterPagingAndSorting = () => {
    return stableSort(records, getComparator(order, orderBy)).splice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  const TblStickyHeader = () => {
    return (
      <>
        <TableHead>
          <TableRow>
            <StickyCell>
              <TableCell>
                <Checkbox
                  color="primary"
                  // checked={selectAll}
                  // onChange={handleSelectAll}
                />
              </TableCell>
              {headers
                .filter((header) => header.sticky === true)
                .map((header, index) => (
                  <TableCell
                    key={header.id}
                    // sortDirection={orderBy === header.id ? order : false}
                    // style={{ borderBottom: "none" }}
                  >
                    {/* {header.disabledSorting ? (
                      header.label
                    ) : (
                      <TableSortLabel
                        active={index === 0 ? true : orderBy === header.id}
                        // direction={orderBy === header.id ? order : "asc"}
                        // onClick={handleSort(header.id)}
                      >
                        {header.label}
                      </TableSortLabel>
                    )} */}
                  </TableCell>
                ))}
            </StickyCell>
            {/* {headers
            .filter((header) => header.sticky === false)
            .map((header, index) => (
              <TableCell
                key={header.id}
                sortDirection={orderBy === header.id ? order : false}
              >
                {header.disabledSorting ? (
                  header.label
                ) : (
                  <TableSortLabel
                    active={index === 0 ? true : orderBy === header.id}
                    direction={orderBy === header.id ? order : "asc"}
                    // onClick={handleSort(header.id)}
                  >
                    {header.label}
                  </TableSortLabel>
                )}
              </TableCell>
            ))} */}
          </TableRow>
        </TableHead>
      </>
    );
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      count={records.length}
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

  const Tbl = (props) => (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader size={props.size ? props.size : "small"}>
          <TblStickyHeader />
          <TableBody>{props.children}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );

  return {
    Tbl,
    TblPagination,
    recordsAfterPagingAndSorting,
  };
}
