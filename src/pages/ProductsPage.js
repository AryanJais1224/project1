import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import ProductForm from '../components/ProductForm';

const ProductsPage = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4">Products</Typography>
      <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
        Add New Product
      </Button>
      <ProductForm />
      {/* Display product list here */}
    </Container>
  );
};

export default ProductsPage;
