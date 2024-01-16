import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About RAJIT</h1>
      </header>
      <table className = "aboutme">
        <tr>
          <th>Question:</th>
          <th>Answer:</th>
        </tr>
        <tr>
          <td>Favorite Quote?</td>
          <td>None to be honest I dont know Bla Bla Random quote</td>
        </tr>
        <tr>
          <td>Nicknames?</td>
          <td>No not really more blabbering blah blah blah</td>
        </tr>
        <tr>
          <td>Favorite Activites/Hobbies?</td>
          <td>Idk playing videogames and sports and something</td>
        </tr>
      </table>
    </div>

  );
}

export default App;
