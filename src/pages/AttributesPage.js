import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

// Sample attribute data
const sampleAttributes = [
  {
    id: 1,
    name: 'Color',
    type: 'Text',
    status: 'Active',
    includeInMenu: 'Yes',
  },
  {
    id: 2,
    name: 'Size',
    type: 'Text',
    status: 'Inactive',
    includeInMenu: 'No',
  },
  // Add more attributes as needed
];

const AttributesPage = () => {
  const [attributes, setAttributes] = useState([]);

  // Fetch attributes from backend (simulate with sample data)
  useEffect(() => {
    // Fetch from API in a real app
    setAttributes(sampleAttributes);
  }, []);

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Attributes List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Include in Menu</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attributes.map((attribute) => (
                <TableRow key={attribute.id}>
                  <TableCell>{attribute.name}</TableCell>
                  <TableCell>{attribute.type}</TableCell>
                  <TableCell>{attribute.status}</TableCell>
                  <TableCell>{attribute.includeInMenu}</TableCell>
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

export default AttributesPage;
