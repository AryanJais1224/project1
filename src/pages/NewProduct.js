import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { 
  Container, Typography, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, 
  FormControlLabel, Checkbox, Grid 
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

const RightDivContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const RightDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  width: '100%',
}));

const NewProduct = () => {
  // State management for the form
  const [form1, setForm1] = useState({
    name: '',
    sku: '',
    price: '',
    weight: '',
    category: '',
    taxClass: '',
    description: '',
  });

  const [form2, setForm2] = useState({
    media: null,
  });

  const [form3, setForm3] = useState({
    urlKey: '',
    metaTitle: '',
    metaKeywords: '',
    metaDescription: '',
  });

  const [productStatus, setProductStatus] = useState({
    status: 'enabled',
    visibility: 'visible',
  });

  const [inventory, setInventory] = useState({
    manageStocks: false,
    stockAvailability: false,
    quantity: '',
  });

  const [attributeGroup, setAttributeGroup] = useState('');

  // Handle form changes
  const handleForm1Change = (e) => {
    const { name, value } = e.target;
    setForm1({
      ...form1,
      [name]: value,
    });
  };

  const handleForm2Change = (e) => {
    const { name, files } = e.target;
    setForm2({
      ...form2,
      [name]: files[0],
    });
  };

  const handleForm3Change = (e) => {
    const { name, value } = e.target;
    setForm3({
      ...form3,
      [name]: value,
    });
  };

  const handleProductStatusChange = (e) => {
    const { name, value } = e.target;
    setProductStatus({
      ...productStatus,
      [name]: value,
    });
  };

  const handleInventoryChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInventory({
      ...inventory,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAttributeGroupChange = (e) => {
    setAttributeGroup(e.target.value);
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log('Save clicked', { form1, form2, form3, productStatus, inventory, attributeGroup });
  };

  const handleCancel = () => {
    // Implement cancel functionality here
    console.log('Cancel clicked');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom marginTop="25px">
        New Product
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={8}>
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
                label="SKU"
                name="sku"
                value={form1.sku}
                onChange={handleForm1Change}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Price"
                name="price"
                value={form1.price}
                onChange={handleForm1Change}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Weight"
                name="weight"
                value={form1.weight}
                onChange={handleForm1Change}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={form1.category}
                  onChange={handleForm1Change}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="category1">Category 1</MenuItem>
                  <MenuItem value="category2">Category 2</MenuItem>
                  <MenuItem value="category3">Category 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Tax Class</InputLabel>
                <Select
                  name="taxClass"
                  value={form1.taxClass}
                  onChange={handleForm1Change}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="taxClass1">Tax Class 1</MenuItem>
                  <MenuItem value="taxClass2">Tax Class 2</MenuItem>
                  <MenuItem value="taxClass3">Tax Class 3</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                margin="normal"
                label="Description"
                name="description"
                value={form1.description}
                onChange={handleForm1Change}
                multiline
                rows={4}
              />
            </FormContainer>
          </FormSection>

          {/* Form 2: Media Upload */}
          <FormSection>
            <Typography variant="h6" gutterBottom>
              Form 2: Media Upload
            </Typography>
            <FormContainer>
              <Button
                variant="contained"
                component="label"
              >
                Upload Media
                <input
                  type="file"
                  hidden
                  name="media"
                  onChange={handleForm2Change}
                />
              </Button>
            </FormContainer>
          </FormSection>

          {/* Form 3: SEO */}
          <FormSection>
            <Typography variant="h6" gutterBottom>
              Form 3: Search Engine Optimization
            </Typography>
            <FormContainer>
              <TextField
                fullWidth
                margin="normal"
                label="URL Key"
                name="urlKey"
                value={form3.urlKey}
                onChange={handleForm3Change}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Meta Title"
                name="metaTitle"
                value={form3.metaTitle}
                onChange={handleForm3Change}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Meta Keywords"
                name="metaKeywords"
                value={form3.metaKeywords}
                onChange={handleForm3Change}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Meta Description"
                name="metaDescription"
                value={form3.metaDescription}
                onChange={handleForm3Change}
                multiline
                rows={4}
              />
            </FormContainer>
          </FormSection>

          {/* Action Buttons */}
          <Box mt={4} marginBottom="30px">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel} sx={{ ml: 2 }}>
              Cancel
            </Button>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <RightDivContainer>
            {/* Div 1: Product Status */}
            <RightDiv>
              <Typography variant="h6" gutterBottom>
                Product Status
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={productStatus.status}
                  onChange={handleProductStatusChange}
                >
                  <MenuItem value="enabled">Enabled</MenuItem>
                  <MenuItem value="disabled">Disabled</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Visibility</InputLabel>
                <Select
                  name="visibility"
                  value={productStatus.visibility}
                  onChange={handleProductStatusChange}
                >
                  <MenuItem value="visible">Visible</MenuItem>
                  <MenuItem value="not visible">Not Visible</MenuItem>
                </Select>
              </FormControl>
            </RightDiv>

            {/* Div 2: Inventory */}
            <RightDiv>
              <Typography variant="h6" gutterBottom>
                Inventory
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={inventory.manageStocks}
                    onChange={handleInventoryChange}
                    name="manageStocks"
                  />
                }
                label="Manage Stocks"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Stock Availability</InputLabel>
                <Select
                  name="stockAvailability"
                  value={inventory.stockAvailability}
                  onChange={handleInventoryChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                margin="normal"
                label="Quantity"
                name="quantity"
                value={inventory.quantity}
                onChange={handleInventoryChange}
              />
            </RightDiv>

            {/* Div 3: Attribute Group */}
            <RightDiv>
              <Typography variant="h6" gutterBottom>
                Select Attribute Group
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Attribute Group</InputLabel>
                <Select
                  name="attributeGroup"
                  value={attributeGroup}
                  onChange={handleAttributeGroupChange}
                >
                  <MenuItem value="group1">Group 1</MenuItem>
                  <MenuItem value="group2">Group 2</MenuItem>
                  <MenuItem value="group3">Group 3</MenuItem>
                </Select>
              </FormControl>
            </RightDiv>
          </RightDivContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewProduct;
