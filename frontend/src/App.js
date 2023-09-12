import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Header from "./components/header/Header"
import Details from "./pages/details/Details"
import Account from "./pages/account/Account"
import Login from "./pages/login/Login"
import Register from "./pages/login/Register"
import Create from "./components/create/Create"
import Footer from "./components/footer/Footer"
import Services from "./pages/services/Services"

export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}