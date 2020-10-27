import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../App';

const LinkForm = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const { loadLinks } = useContext(AppContext);

  const resetForm = () => {
    setName('');
    setUrl('');
    setDescription('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({ name, url, description });
    try {
      await fetch('/.netlify/functions/createLink', {
        method: 'POST',
        body,
      });
      resetForm();
      loadLinks();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="card">
      <div className="card-header">Add Link</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="url">Url</label>
            <input
              type="text"
              name="url"
              className="form-control"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default LinkForm;
