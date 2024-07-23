import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { 
  Container, Typography, TextField, Checkbox, FormControlLabel, Button, FormGroup, FormControl, 
  InputLabel, Select, MenuItem, Divider, Box 
} from '@mui/material';

// Styled components
const FormSection = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const FormContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

const Coupons = () => {
  // State management for the form
  const [form1, setForm1] = useState({
    name: '',
    description: '',
    discountAmount: '',
    startDate: '',
    endDate: '',
    freeShipping: false,
  });

  const [form2, setForm2] = useState({
    fixedDiscountOrder: false,
    percentageDiscountOrder: false,
    fixedDiscountProducts: false,
    percentageDiscountProducts: false,
    buyXGetY: false,
  });

  const [form3, setForm3] = useState({
    minPurchaseAmount: '',
    minPurchaseQuantity: '',
  });

  // Handle form changes
  const handleForm1Change = (e) => {
    const { name, value, type, checked } = e.target;
    setForm1({
      ...form1,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleForm2Change = (e) => {
    const { name, checked } = e.target;
    setForm2({
      ...form2,
      [name]: checked,
    });
  };

  const handleForm3Change = (e) => {
    const { name, value } = e.target;
    setForm3({
      ...form3,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log('Save clicked', { form1, form2, form3 });
  };

  const handleCancel = () => {
    // Implement cancel functionality here
    console.log('Cancel clicked');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom marginTop="20px">
        Coupons Management
      </Typography>

      {/* Form 1: Details */}
      <FormSection>
        <Typography variant="h6" gutterBottom>
          Form 1: Details
        </Typography>
        <FormContainer>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={form1.name}
            onChange={handleForm1Change}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            value={form1.description}
            onChange={handleForm1Change}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Discount Amount"
            name="discountAmount"
            value={form1.discountAmount}
            onChange={handleForm1Change}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Start Date"
            type="date"
            name="startDate"
            value={form1.startDate}
            onChange={handleForm1Change}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="End Date"
            type="date"
            name="endDate"
            value={form1.endDate}
            onChange={handleForm1Change}
            InputLabelProps={{ shrink: true }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form1.freeShipping}
                name="freeShipping"
                onChange={handleForm1Change}
              />
            }
            label="Free Shipping"
          />
        </FormContainer>
      </FormSection>

      {/* Form 2: Discount Types */}
      <FormSection>
        <Typography variant="h6" gutterBottom>
          Form 2: Discount Types
        </Typography>
        <FormContainer>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={form2.fixedDiscountOrder}
                  name="fixedDiscountOrder"
                  onChange={handleForm2Change}
                />
              }
              label="Fixed discount to entire order"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={form2.percentageDiscountOrder}
                  name="percentageDiscountOrder"
                  onChange={handleForm2Change}
                />
              }
              label="Percentage discount to entire order"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={form2.fixedDiscountProducts}
                  name="fixedDiscountProducts"
                  onChange={handleForm2Change}
                />
              }
              label="Fixed discount to specific products"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={form2.percentageDiscountProducts}
                  name="percentageDiscountProducts"
                  onChange={handleForm2Change}
                />
              }
              label="Percentage discount to specific products"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={form2.buyXGetY}
                  name="buyXGetY"
                  onChange={handleForm2Change}
                />
              }
              label="Buy X get Y"
            />
          </FormGroup>
        </FormContainer>
      </FormSection>

      {/* Form 3: Purchase Requirements */}
      <FormSection>
        <Typography variant="h6" gutterBottom>
          Form 3: Purchase Requirements
        </Typography>
        <FormContainer>
          <TextField
            fullWidth
            margin="normal"
            label="Minimum Purchase Amount"
            name="minPurchaseAmount"
            value={form3.minPurchaseAmount}
            onChange={handleForm3Change}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Minimum Purchase Quantity"
            name="minPurchaseQuantity"
            value={form3.minPurchaseQuantity}
            onChange={handleForm3Change}
          />
        </FormContainer>
      </FormSection>

      {/* Action Buttons */}
      <Box mt={4} marginBottom="20px">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel} sx={{ ml: 2 }}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default Coupons;
