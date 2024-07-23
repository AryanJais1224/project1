import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

// Sample customer data
const sampleCustomers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    createdAt: "2024-07-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    createdAt: "2024-07-21",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    createdAt: "2024-07-22",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    createdAt: "2024-07-23",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    createdAt: "2024-07-24",
  },
  {
    id: 6,
    name: "Diana Evans",
    email: "diana.evans@example.com",
    createdAt: "2024-07-25",
  },
  {
    id: 7,
    name: "Ethan Foster",
    email: "ethan.foster@example.com",
    createdAt: "2024-07-26",
  },
  {
    id: 8,
    name: "Fiona Green",
    email: "fiona.green@example.com",
    createdAt: "2024-07-27",
  },
  {
    id: 9,
    name: "George Harris",
    email: "george.harris@example.com",
    createdAt: "2024-07-28",
  },
  {
    id: 10,
    name: "Hannah Ingram",
    email: "hannah.ingram@example.com",
    createdAt: "2024-07-29",
  },
];

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  // Fetch customers from backend (simulate with sample data)
  useEffect(() => {
    // Fetch from API in a real app
    setCustomers(sampleCustomers);
  }, []);

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Customers List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default CustomersPage;
