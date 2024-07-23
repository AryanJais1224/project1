import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D', name: 'Product 1', price: '$10', sku: 'SKU001', stock: 100, status: 'Available' },
  { id: 2, thumbnail: 'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D', name: 'Product 2', price: '$20', sku: 'SKU002', stock: 200, status: 'Out of Stock' },
  { id: 3, thumbnail: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww', name: 'Product 3', price: '$30', sku: 'SKU003', stock: 300, status: 'Available' },
  // Add more products as needed
];

const AllProducts = () => {
  const navigate = useNavigate();

  const handleNewProduct = () => {
    navigate('/new-product');
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} marginTop="30px">
        <Typography variant="h4" gutterBottom>
          All Products
        </Typography>
        <Button variant="contained" color="primary" onClick={handleNewProduct}>
          New Product
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img src={product.thumbnail} alt={product.name} width="50" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllProducts;