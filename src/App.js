import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import NewProductPage from './pages/NewProduct';
import AllProductsPage from './pages/AllProducts';
import NewCategoryPage from './pages/NewCategoryPage';
import CategoriesPage from './pages/CategoriesPage';
import CollectionsPage from './pages/CollectionsPage';
import AttributesPage from './pages/AttributesPage';
import CouponsPage from './pages/Coupons';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import OrdersPage from './pages/OrdersPage';
import CustomersPage from './pages/CustomersPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, marginLeft: 250, marginTop: 64 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products/new" element={<NewProductPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/categories/new" element={<NewCategoryPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/attributes" element={<AttributesPage />} />
            <Route path="/coupons" element={<CouponsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/customers" element={<CustomersPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
