// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Styling
import './App.css';
// Components
import { Home } from './components/Home';
import MemberList from './components/MemberList';
import SongList from './components/SongList';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/memberList" component={MemberList} />
          <Route path="/songList" component={SongList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;