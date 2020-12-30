import React from "react";
import Sidebar from './Sidebar';
import Questions from './Questions';
import './App.css';

function App() {
  return (
    <>
      <div div className="app-grid">
        <div>
        <Questions />
        </div>
        <div>
        <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;

