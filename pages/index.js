import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";
import StickyTable from "../src/components/Table/index.js";
import useFetchData from "../src/components/useFetchData";

const tableHeaders = [
  { id: "id", label: "ID", sticky: true, disableSorting: false },
  { id: "email", label: "Email", sticky: true, disableSorting: false },
  { id: "name", label: "Name", sticky: true, disableSorting: false },
  { id: "country", label: "Country", sticky: false, disableSorting: false },
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
  const { isLoading, apiData, error } = useFetchData("");

  return (
    <>
      {isLoading && <span>Loading.....</span>}
      {!isLoading && error ? (
        <span>Error in fetching data ...</span>
      ) : (
        <Container maxWidth="xl">
          <Box sx={{ my: 4 }}>
            <StickyTable
              data={apiData}
              tableHeaders={tableHeaders}
            ></StickyTable>
            <Copyright />
          </Box>
        </Container>
      )}
    </>
  );
}
