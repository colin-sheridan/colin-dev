import React from 'react';
import logo from '../Avatar.jpeg';

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
        <code>Colin Does Stuff</code>
      </p>
    </div>
  );
}
