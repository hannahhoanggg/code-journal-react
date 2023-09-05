import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Entries from './Entries';
import Edit from './Edit';
import Create from './Create';

export default function App() {
  return (
    <div>
      <NavBar />
      <Entries />
      <Edit />
      <Create />
    </div>
  );
}
