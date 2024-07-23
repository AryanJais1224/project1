import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const NewCategoryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    includeInMenu: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the formData to your backend
    console.log('New Category Data:', formData);
  };

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Add New Category
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Category Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Include in Menu"
            name="includeInMenu"
            value={formData.includeInMenu}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Category
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default NewCategoryPage;
