import { useState } from 'react';
import './AppStyles.css';
import './AppLayout.css';
import NavBar from './NavBar';
import Entries from './Entries';
// import Edit from './Edit';
import Create from './Create';

export default function App() {
  const [viewPage, setViewPage] = useState('create');
  return (
    <div>
      <NavBar onClick={setViewPage} />
      {viewPage === 'entries' && <Entries onClick={setViewPage} />}
      {viewPage === 'create' && <Create />}
    </div>
  );
}
