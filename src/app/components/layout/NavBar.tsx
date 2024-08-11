"use client";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-1000 flex justify-center items-center h-16">
      <div className="nav-container flex justify-between items-center px-4 w-full max-w-screen-xl">
        <Nav className="">
          <Nav.Item>
            <Nav.Link href="/">Name</Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav className="flex justify-center space-x-4">
          <Nav.Item>
            <Nav.Link eventKey="link-services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-api">API</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-pricing">Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-about">About</Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav className="flex justify-end">
          <Nav.Item>
            <Nav.Link href="/login">Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default NavBar;
