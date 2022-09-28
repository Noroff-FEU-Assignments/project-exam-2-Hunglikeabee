import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Hotels from "./pages/Hotels";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ApiProvider } from "./context/ApiContext";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Hotel from "./pages/Hotel";
import AddHotel from "./components/adminPage/AddHotel";
import AdminMessages from "./components/adminPage/AdminMessages";
import HotelEnquiries from "./components/adminPage/HotelEnquiries";
import Footer from "./components/footer/Footer";
import styled from "styled-components";
import { MainTheme } from "./components/styles/MainTheme";
import LightDarkMode from "./components/general/LightDarkMode";
import { DarkTheme } from "./components/styles/DarkTheme";
import { useState } from "react";
import GlobalStyle from "./components/styles/GlobalStyles";

const StyledMainContainer = styled.div`
  min-height: 100vh;
  margin-top: 200px;
`;


export default function App() {

  const [currentTheme, setTheme] = useState(MainTheme)

  const handleChangeMode = () => {
    if(currentTheme === MainTheme) {
      setTheme(DarkTheme)
    }
    else {
      setTheme(MainTheme)
    }
  }

  return (
    <ApiProvider>
      <AuthProvider>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle />
          <LightDarkMode changeDarkLight={handleChangeMode} />
          <BrowserRouter>
            <Header />
            <StyledMainContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="hotels" element={<Hotels />} />
                <Route path="hotel/:id" element={<Hotel />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="admin" element={<Admin />} />
                <Route path="addhotel" element={<AddHotel />} />
                <Route path="messages" element={<AdminMessages />} />
                <Route path="enquiries" element={<HotelEnquiries />} />
                <Route path="enquiries/:id" element={<HotelEnquiries />} />
              </Routes>
            </StyledMainContainer>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </ApiProvider>
  );
}
