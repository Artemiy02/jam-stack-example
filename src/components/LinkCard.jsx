import React, { useContext } from 'react';
import { AppContext } from '../App';

export const LinkCard = ({ link }) => {
  const { loadLinks } = useContext(AppContext);
  const toggleArchiveLink = async () => {
    try {
      await fetch('/.netlify/functions/updateLink', {
        method: 'PUT',
        body: JSON.stringify({
          ...link,
          archived: !link.archived,
        }),
      });
      loadLinks();
    } catch (err) {
      console.error('Ops', err);
    }
  };

  const deleteLink = async () => {
    try {
      await fetch('/.netlify/functions/deleteLink', {
        method: 'DELETE',
        body: JSON.stringify({
          id: link._id,
        }),
      });
      loadLinks();
    } catch (err) {
      console.error('Ops', err);
    }
  };
  return (
    <div className="card mb-3">
      <div className="card-header">{link.name}</div>
      <div className="card-body">
        <a href="{link.url}">{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-warning mr-2" onClick={toggleArchiveLink}>
          {link.archived ? 'Unarchive' : 'Archive'}
        </button>
        <button className="btn btn-danger" onClick={deleteLink}>
          Delete
        </button>
      </div>
    </div>
  );
};
