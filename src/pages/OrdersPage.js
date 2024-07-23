import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

// Sample order data
const sampleOrders = [
  {
    id: 1,
    orderName: 'Order #001',
    date: '2024-07-20',
    customerEmail: 'customer1@example.com',
    shipmentStatus: 'Shipped',
    paymentStatus: 'Paid',
    totalPrice: '$100.00',
  },
  {
    id: 2,
    orderName: 'Order #002',
    date: '2024-07-21',
    customerEmail: 'customer2@example.com',
    shipmentStatus: 'Pending',
    paymentStatus: 'Unpaid',
    totalPrice: '$150.00',
  },
  {
    id: 3,
    orderName: 'Order #003',
    date: '2024-07-22',
    customerEmail: 'customer3@example.com',
    shipmentStatus: 'Delivered',
    paymentStatus: 'Paid',
    totalPrice: '$200.00',
  },
  {
    id: 4,
    orderName: 'Order #004',
    date: '2024-07-23',
    customerEmail: 'customer4@example.com',
    shipmentStatus: 'Shipped',
    paymentStatus: 'Paid',
    totalPrice: '$250.00',
  },
  {
    id: 5,
    orderName: 'Order #005',
    date: '2024-07-24',
    customerEmail: 'customer5@example.com',
    shipmentStatus: 'Pending',
    paymentStatus: 'Unpaid',
    totalPrice: '$300.00',
  },
  {
    id: 6,
    orderName: 'Order #006',
    date: '2024-07-25',
    customerEmail: 'customer6@example.com',
    shipmentStatus: 'Delivered',
    paymentStatus: 'Paid',
    totalPrice: '$350.00',
  },
  {
    id: 7,
    orderName: 'Order #007',
    date: '2024-07-26',
    customerEmail: 'customer7@example.com',
    shipmentStatus: 'Shipped',
    paymentStatus: 'Paid',
    totalPrice: '$400.00',
  },
  {
    id: 8,
    orderName: 'Order #008',
    date: '2024-07-27',
    customerEmail: 'customer8@example.com',
    shipmentStatus: 'Pending',
    paymentStatus: 'Unpaid',
    totalPrice: '$450.00',
  },
  {
    id: 9,
    orderName: 'Order #009',
    date: '2024-07-28',
    customerEmail: 'customer9@example.com',
    shipmentStatus: 'Delivered',
    paymentStatus: 'Paid',
    totalPrice: '$500.00',
  },
  {
    id: 10,
    orderName: 'Order #010',
    date: '2024-07-29',
    customerEmail: 'customer10@example.com',
    shipmentStatus: 'Shipped',
    paymentStatus: 'Paid',
    totalPrice: '$550.00',
  },
];

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from backend (simulate with sample data)
  useEffect(() => {
    // Fetch from API in a real app
    setOrders(sampleOrders);
  }, []);

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Orders List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Customer Email</TableCell>
                <TableCell>Shipment Status</TableCell>
                <TableCell>Payment Status</TableCell>
                <TableCell>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.orderName}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.customerEmail}</TableCell>
                  <TableCell>{order.shipmentStatus}</TableCell>
                  <TableCell>{order.paymentStatus}</TableCell>
                  <TableCell>{order.totalPrice}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default OrdersPage;
