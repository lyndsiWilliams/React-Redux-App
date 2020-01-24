// React
import React from 'react';
// Styling
import { Jumbotron, Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {
  
  const link = () => {
    window.location.href='https://discord.gg/p3fVhSM';
  };

  return (
    <Jumbotron inverse style={{color: "black", background: "rgba(0, 0, 0, 0.3)"}}>
      <h1 className="display-3">The Overlord's Blades</h1>
      <hr className="my-2" />
      <p className="lead">
        <Button inverse style={{color: "black", border: "1px solid black"}} onClick={link}>Click to join our Discord!</Button>
      </p>
      <Nav style={{justifyContent: "center", marginTop: "2%"}}>
        <NavItem>
          <NavLink href="/" active style={{color: "black", fontSize: "1.5rem"}}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/memberList" style={{color: "black", fontSize: "1.5rem"}}>Member List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/songList" style={{color: "black", fontSize: "1.5rem"}}>Song List</NavLink>
        </NavItem>
      </Nav>
    </Jumbotron>
  );
};

export default Navbar;