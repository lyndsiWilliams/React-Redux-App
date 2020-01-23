// React
import React from 'react';
// Styling
import { Jumbotron, Button } from 'reactstrap';
// Component
import MemberList from './MemberList';
// Image
import map from '../img/ffxivmap.png';

export const Home = () => {
  const link = () => {
    window.location.href='https://discord.gg/p3fVhSM';
  };

  return (
    <div>
      <Jumbotron inverse style={{color: "black", background: "rgba(0, 0, 0, 0.3)"}}>
        <h1 className="display-3">The Overlord's Blades</h1>
        <hr className="my-2" />
        <p className="lead">
          <Button inverse style={{color: "black", border: "1px solid black"}} onClick={link}>Click to join our Discord!</Button>
        </p>
      </Jumbotron>
      {/* Map */}
      <img src={map} className="map-img" />

      {/* <MemberList /> */}
    </div>
  );
};

export default Home;