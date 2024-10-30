"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import useCryptoStore from "@/stores/store";

interface Row {
  id: React.Key | null | undefined;
  name: string | null | undefined;
  symbol: string | null | undefined;
  price_usd: string | null | undefined;
  tsupply: string | null | undefined;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontWeight: "bold",
    padding: "8px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "8px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.grey[300],
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.common.white,
  },
  margin: 0,
  padding: 0,
}));

export default function PaginatedTable() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;
  const isMobile = useMediaQuery("(max-width:600px)");

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { coins, fetchCoins } = useCryptoStore((state: any) => state);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchCoins();
      setLoading(false);
    };
    loadData();
  }, [fetchCoins]);

  const handlePrevious = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if ((page + 1) * itemsPerPage < coins.length) setPage(page + 1);
  };

  const paginatedRows: Row[] = coins.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        maxWidth: "750px",
        margin: "0 auto",
        overflowX: "auto",
      }}
    >
      <Table aria-label="customized table">
        {!isMobile && (
          <TableHead>
            <TableRow>
              <StyledTableCell>💰 Coin</StyledTableCell>
              <StyledTableCell>📄 Code</StyledTableCell>
              <StyledTableCell>🤑 Price</StyledTableCell>
              <StyledTableCell>📉 Total Supply</StyledTableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {loading ? (
            <TableRow>
              <StyledTableCell
                colSpan={4}
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              </StyledTableCell>
            </TableRow>
          ) : paginatedRows.length > 0 ? (
            paginatedRows.map((row: Row, index: number) => (
              <React.Fragment key={row.id}>
                {isMobile ? (
                  <TableRow
                    style={{
                      backgroundColor: index % 2 === 0 ? "white" : "#e0e0e0",
                    }}
                  >
                    <StyledTableCell colSpan={4}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "10px",
                        }}
                      >
                        <div>
                          <strong>💰 Coin</strong>
                          <p>{row.name}</p>
                        </div>
                        <div>
                          <strong>📄 Code</strong>
                          <p>{row.symbol}</p>
                        </div>
                        <div>
                          <strong>🤑 Price</strong>
                          <p>${row.price_usd}</p>
                        </div>
                        <div>
                          <strong>📉 Total Supply</strong>
                          <p>{row.tsupply}</p>
                        </div>
                      </div>
                    </StyledTableCell>
                  </TableRow>
                ) : (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.symbol}</StyledTableCell>
                    <StyledTableCell>${row.price_usd}</StyledTableCell>
                    <StyledTableCell>{row.tsupply}</StyledTableCell>
                  </StyledTableRow>
                )}
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <StyledTableCell colSpan={4} align="center">
                No data available
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {page > 0 ? (
          <Button
            style={{ textTransform: "capitalize" }}
            variant="text"
            onClick={handlePrevious}
          >
            ← Previous
          </Button>
        ) : (
          <div></div>
        )}
        <Button
          style={{ textTransform: "capitalize" }}
          variant="text"
          onClick={handleNext}
          disabled={(page + 1) * itemsPerPage >= coins.length}
        >
          Next →
        </Button>
      </div>
    </TableContainer>
  );
}
