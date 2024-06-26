// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./mainlayout/Layout";
import Home from "./pages/Home";
import SchemesPage from "./pages/SchemesPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Otppage from "./pages/Otppage";
import ResetPassword from "./pages/ResetPassword";
import LoginEmail from "./pages/LoginEmail";
import LoginOtp from "./pages/LoginOtp";
import ForgotPassword from "./pages/ForgotPassword";
import Orders from "./pages/Orders";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import PersonalInfo from "./pages/PersonalInfo";
import Reviews from "./pages/Reviews";
import YourScheme from "./pages/YourScheme";
import Navbar from "./components/Navbar";
import Spin from "./pages/Spin";
import Cancellation from "./pages/Cancellation";
import TrackingOrder from "./pages/TrackingOrder";
import AboutUs from "./pages/About us";
import ConsumerPolicy from "./pages/ConsumerPolicy";
import Help from "./pages/Help";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="schemes" element={<SchemesPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="otp" element={<Otppage />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="loginemail" element={<LoginEmail />} />
        <Route path="loginotp" element={<LoginOtp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="orders" element={<Orders />} />
        <Route path="address" element={<Address />} />
        <Route path="payment" element={<Payment />} />
        <Route path="cart" element={<Cart />} />
        <Route path="categories" element={<Categories />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cancellation" element={<Cancellation />} />
        <Route path="trackingorder" element={<TrackingOrder />} />
        <Route path="productPage" element={<Product />} />
        <Route path="personalInfo" element={<PersonalInfo />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="yourScheme" element={<YourScheme />} />
        <Route path="spin" element={<Spin />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="consumerPolicy" element={<ConsumerPolicy />} />
        <Route path="helpCenter" element={<Help />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
