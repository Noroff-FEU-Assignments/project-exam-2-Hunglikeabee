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
    BoxShadowInset: "inset 0px 0px 10px 3px rgba(0,0,0, 1)",
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="hotels" element={<Hotels />} />
              <Route path="hotel/:id" element={<Hotel />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </ApiProvider>

  );
}