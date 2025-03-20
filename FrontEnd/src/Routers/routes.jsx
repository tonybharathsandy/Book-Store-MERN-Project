import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Components/Login';
import Register from '../Components/Register';
import CartPage from '../Pages/books/CartPage';
import CheckOutPage from '../Pages/books/CheckOutPage';
import SingleDataPage from '../Pages/books/SingleDataPage';
import PrivateRouter from './PrivateRouter';
import Orders from '../Pages/books/Orders';
import AdminRoute from './AdminRoute';
import AdminLogin from '../Components/AdminLogin';
import DashBoardLayout from '../Pages/dashBoard/DashBoardLayout';
import Dashboard from '../Pages/dashBoard/DashBoard';
import ManageBooks from '../Pages/dashBoard/manageBooks/ManageBooks';
import AddNewBook from '../Pages/dashBoard/addBook/AddNewBook'
import UpdateBook from '../Pages/dashBoard/editBook/UpdateBook';
import PageNotFound from '../Components/PageNoteFound';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<PrivateRouter><CheckOutPage /></PrivateRouter>} />
      <Route path="/books/:id" element={<SingleDataPage />} />
      <Route path="/orders" element={<PrivateRouter><Orders /></PrivateRouter>} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Dashboard with Admin Protection */}
      <Route path="/dashboard" element={<AdminRoute><DashBoardLayout /></AdminRoute>}>
        <Route index element={<AdminRoute><Dashboard/></AdminRoute>} />
        <Route path="add-new-book" element={<AdminRoute><AddNewBook/></AdminRoute>} />
        <Route path="edit-book/:id" element={<AdminRoute><UpdateBook/></AdminRoute>} />
        <Route path="manage-books" element={<AdminRoute><ManageBooks/></AdminRoute>} />
        <Route path="*" element={<PageNotFound/>} />
      </Route>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default AppRoutes;
