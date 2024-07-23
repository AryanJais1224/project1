import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

// Sample collection data
const sampleCollections = [
  {
    id: 1,
    name: 'Winter Collection',
    status: 'Active',
    includeInMenu: 'Yes',
  },
  {
    id: 2,
    name: 'Summer Collection',
    status: 'Inactive',
    includeInMenu: 'No',
  },
  // Add more collections as needed
];

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);

  // Fetch collections from backend (simulate with sample data)
  useEffect(() => {
    // Fetch from API in a real app
    setCollections(sampleCollections);
  }, []);

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Collections List
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
              {collections.map((collection) => (
                <TableRow key={collection.id}>
                  <TableCell>{collection.name}</TableCell>
                  <TableCell>{collection.status}</TableCell>
                  <TableCell>{collection.includeInMenu}</TableCell>
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

export default CollectionsPage;
