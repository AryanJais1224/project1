import React from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; // New icon for Coupons
import CategoryIcon from "@mui/icons-material/Category";
import CollectionsIcon from "@mui/icons-material/Collections";
import FilterListIcon from '@mui/icons-material/FilterList';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';




const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  //   '&:hover': {
  //     backgroundColor: theme.palette.action.hover,
  //     cursor: 'pointer',
  //   },
}));

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "#2c3e50",
        padding: 2,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        color: "#ecf0f1",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginBottom: 4, fontWeight: "bold", fontSize: "1.5rem" }}
      >
        Admin Panel
      </Typography>
      <List>
        <StyledListItem>
          <DashboardIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            Dashboard
          </Link>
        </StyledListItem>

        <StyledListItem>
          <LocalOfferIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/coupons"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            New Coupons
          </Link>
        </StyledListItem>
        <StyledListItem>
          <StorefrontIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/products/new"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            New Product
          </Link>
        </StyledListItem>
        <StyledListItem>
          <StorefrontIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/products"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            Products
          </Link>
        </StyledListItem>
        <StyledListItem>
          <CategoryIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/categories/new"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            New Category
          </Link>
        </StyledListItem>
        <StyledListItem>
          <CategoryIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/categories"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            Categories
          </Link>
        </StyledListItem>
        <StyledListItem>
          <CollectionsIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/collections"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            Collections
          </Link>
        </StyledListItem>
        <StyledListItem>
          <FilterListIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/attributes"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            Attributes
          </Link>
        </StyledListItem>
        <StyledListItem>
          <ReceiptIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/orders"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            Orders
          </Link>
        </StyledListItem>
        <StyledListItem>
          <PersonIcon sx={{ marginRight: 2, fontSize: "1.5rem" }} />
          <Link
            to="/customers"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
            Customers
          </Link>
        </StyledListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
