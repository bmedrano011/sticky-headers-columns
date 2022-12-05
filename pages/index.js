import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";
import useStickyTable from "../src/components/useTable";
import { userData } from "../src/components/user_mock_data";
import { TableCell } from "@mui/material";

const tableHeaders = [
  { id: "id", label: "ID", sticky: true, disableSorting: false },
  { id: "email", label: "Email", sticky: true, disableSorting: false },
  { id: "name", label: "Name", sticky: true, disableSorting: false },
  { id: "country", label: "Country", sticky: true, disableSorting: false },
  {
    id: "ip_address",
    label: "IP Address",
    sticky: false,
    disableSorting: true,
  },
  { id: "split", label: "Split Status", sticky: false, disableSorting: true },
  { id: "currency", label: "Currency", sticky: false, disableSorting: false },
  { id: "ein", label: "EIN", sticky: false, disableSorting: true },
  { id: "md5", label: "MD5 Hash", sticky: false, disableSorting: false },
  { id: "notes", label: "Notes", sticky: false, disableSorting: true },
];

export default function Index() {
  const onSelectAll = () => {};

  const { Tbl, TblPagination, recordsAfterPagingAndSorting } = useStickyTable(
    userData,
    tableHeaders,
    12,
    onSelectAll
  );

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Tbl>
          {recordsAfterPagingAndSorting().map((record, index) => (
            <TableRow key={record.id}>
              <TableCell>{record.label}</TableCell>
            </TableRow>
          ))}
        </Tbl>
        <TblPagination />
        <Copyright />
      </Box>
    </Container>
  );
}
