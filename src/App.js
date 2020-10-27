import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { LinkList } from './components/LinkList';
import LinkForm from './components/LinkForm';

export const AppContext = React.createContext();

function App() {
  const loadLinks = async () => {
    try {
      const res = await fetch('/.netlify/functions/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.error(err);
    }
  };
  const [links, setLinks] = useState([]);

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <AppContext.Provider value={{ loadLinks }}>
      <div className="container py-5">
        <h1 className="text-center mb-5">List O' Links</h1>
        <LinkForm />
        <LinkList links={links} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
