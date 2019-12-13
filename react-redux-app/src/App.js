import React from 'react';
import './App.css';

// Component
import MemberList from './components/MemberList';

// Action
import { getMembers } from './actions/xivActions';

function App() {
  return (
    <div className="App">
      <MemberList />
    </div>
  );
}

export default App;
