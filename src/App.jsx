import "./App.css";
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import { SearchProvider } from './contexts/SearchContext.jsx';
import Header from './Components/CommonComponents/Header.jsx';
import Login from "./Pages/Login.jsx";
import Product from "./Pages/Product.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Cart from "./Pages/Cart.jsx";
import Invoice from "./Pages/Invoice.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Register from "./Pages/Register.jsx";
import Footer from "./Components/CommonComponents/Footer.jsx";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  ) : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
                <Route path="/products/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
                <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                <Route path="/invoice/:invoiceId" element={<ProtectedRoute><Invoice /></ProtectedRoute>} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </Suspense>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
