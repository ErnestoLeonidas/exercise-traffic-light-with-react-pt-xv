import React from 'react'
import TrafficLigth from './components/TrafficLigth'
import './App.css'

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center h-50 mt-5"> 
      <div className="row">
        <div className="col">
          <div className="card">
            <TrafficLigth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
