import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Login/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />


            {/* <Route path="/placeOrder/:detailId" element={} /> */}


            {/* Dashboard route  */}

            <Route path="/dashboard" element={<PrivateRoute><DashboardHome /></PrivateRoute>}>
              {/* <Route path="/dashboard/userProfile" element={<UserProfile />} />
            <Route path={`/dashboard/addProduct`} element={<AddProduct></AddProduct>} />

            <Route path={`/dashboard/manageProduct`} element={<ManageProduct />} />

            <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin />} />

            <Route path={`/dashboard/editProduct/:id`} element={<EditProduct></EditProduct>} />

            <Route path={`/dashboard/manageOrders`} element={<ManageOrders />} />

            <Route path={`/dashboard/myOrders`} element={<MyOrders></MyOrders>} />

            <Route path={`/dashboard/addReview`} element={<AddReview></AddReview>} />

            <Route exact path="/dashboard" element={<UserProfile />} /> */}
            </Route>

            <Route path="/login" element={<Login />} />

            <Route exact path="/" element={<Home />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
