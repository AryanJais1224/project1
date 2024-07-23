import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

// Sample category data
const sampleCategories = [
  {
    id: 1,
    name: 'Electronics',
    status: 'Active',
    includeInMenu: 'Yes',
  },
  {
    id: 2,
    name: 'Books',
    status: 'Inactive',
    includeInMenu: 'No',
  },
  // Add more categories as needed
];

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from backend (simulate with sample data)
  useEffect(() => {
    // Fetch from API in a real app
    setCategories(sampleCategories);
  }, []);

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Categories List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Include in Menu</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.status}</TableCell>
                  <TableCell>{category.includeInMenu}</TableCell>
                  <TableCell>
                    <IconButton color="primary" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default CategoriesPage;
