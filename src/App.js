
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Hotels from './pages/Hotels';

import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from './context/AuthContext';
import { ApiProvider } from './context/ApiContext';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Hotel from './pages/Hotel';
import AddHotel from './components/AdminPage/AddHotel';
import AdminMessages from './components/AdminPage/AdminMessages';

import HotelEnquiries from './components/AdminPage/HotelEnquiries';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const StyledMainContainer = styled.div`
min-height: 100vh;
margin-top: 200px;
`


const MainTheme = {
  colors: {
    LightPink: "#FF82E9",
    DarkPink: "#B3499F",
    LightBlue: "#69FFF8",
    DarkBlue: "#52B3AE",
    LightYellow: "#FFED9C",
    DarkGray: "#262626",
    Black: "#000000",
    White: "#FFFFFF"
  },
  shading: {
    BoxShadow: "0px 0px 10px 5px rgba(0,0,0, 0.5)",
  }
}

export default function App() {
  return (
    <ApiProvider>
      <AuthProvider>
        <ThemeProvider theme={MainTheme}>
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
              <Route path="messages" element={<AdminMessages/>} />
              <Route path="enquiries" element={<HotelEnquiries/>} />
              <Route path="enquiries/:id" element={<HotelEnquiries/>} />
            </Routes>
          </StyledMainContainer>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </ApiProvider>
  );
}