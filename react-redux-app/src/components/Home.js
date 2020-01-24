// React
import React from 'react';
// Image
import map from '../img/ffxivmap.png';

export const Home = () => {
  return (
    <div>
      {/* Map */}
      <img src={map} className="map-img" />
    </div>
  );
};

export default Home;