import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    price: '',
    weight: '',
    category: '',
    description: '',
    media: null,
    urlKey: '',
    metaTitle: '',
    metaKeywords: '',
    metaDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, media: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 2 }}>
      <Typography variant="h6">Product Details</Typography>
      <TextField
        fullWidth
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        name="sku"
        label="SKU"
        value={formData.sku}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="price"
            label="Price"
            value={formData.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="weight"
            label="Weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="category"
            label="Category"
            value={formData.category}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        name="description"
        label="Description"
        multiline
        rows={4}
        value={formData.description}
        onChange={handleChange}
        sx={{ marginTop: 2, marginBottom: 2 }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: 2 }}
      />
      <Typography variant="h6">SEO</Typography>
      <TextField
        fullWidth
        name="urlKey"
        label="URL Key"
        value={formData.urlKey}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        name="metaTitle"
        label="Meta Title"
        value={formData.metaTitle}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        name="metaKeywords"
        label="Meta Keywords"
        value={formData.metaKeywords}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        name="metaDescription"
        label="Meta Description"
        value={formData.metaDescription}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Save Product
      </Button>
    </Box>
  );
};

export default ProductForm;
