// import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { Store } from "./Store";
// import Badge from "react-bootstrap/esm/Badge";
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter className="d-flex flex-column site-container">
      <div>
        <header>
          <Navbar bg="dark" varient="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="text-white">Trendy</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
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
