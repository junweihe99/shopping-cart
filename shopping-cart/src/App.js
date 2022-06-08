import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';

function App() {
  return (
    <HashRouter>
      <Navbar bg="light" variant="light" className="py-4">
        <Container>
            <Navbar.Brand>J's Bakery</Navbar.Brand>
            <Nav variant="pills">
              <Nav.Link href="/shopping-cart">Home</Nav.Link>
              <Nav.Link href="/shopping-cart/Shop">Shop</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route path ="/shopping-cart" element={<Home />}/>
          <Route path ="/shopping-cart/Shop" element={<Shop />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;