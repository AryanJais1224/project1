import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const DashboardPage = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Statistic 1</Typography>
            <Typography variant="body1">Details about statistic 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Statistic 2</Typography>
            <Typography variant="body1">Details about statistic 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Statistic 3</Typography>
            <Typography variant="body1">Details about statistic 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;
