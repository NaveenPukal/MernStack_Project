// import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
function App() {
  return (
    <BrowserRouter className="d-flex flex-column site-container">
      <div>
        <header>
          <Navbar bg="dark" varient="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="text-white">Trendy</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />}></Route>
              <Route path="/" element={<HomeScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <div className="text-center">All rights preserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
