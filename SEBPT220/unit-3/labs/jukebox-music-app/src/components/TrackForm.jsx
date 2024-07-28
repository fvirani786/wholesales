import React, { useState, useEffect } from 'react';

const TrackForm = ({ track, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
  });

  useEffect(() => {
    if (track) {
      setFormData(track);
    }
  }, [track]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Artist:
        <input type="text" name="artist" value={formData.artist} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TrackForm;

