import { useState } from 'react';
import { data } from './data';

export default function Create({ viewSwap }) {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const inputValues = {
      title: title,
      imageUrl: imageUrl,
      notes: notes,
    };
    inputValues.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.unshift(inputValues);
    viewSwap('entries');
  }

  return (
    <div data-view="entry-form" className="entry-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="column-full">
            <div className="top-header">
              <h2>New Entry</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column-full column-half">
            <img
              src={imageUrl ? imageUrl : '/images/placeholder-image-square.jpg'}
              alt="placeholder img"
            />
          </div>
          <div className="column-full column-half">
            <div className="title-box">
              <label htmlFor="title-text">Title</label>
            </div>
            <div className="title-box-input">
              <input
                required
                name="title"
                type="text"
                className="title"
                id="title-text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="image-text">
              <label htmlFor="image-text">Photo URL</label>
            </div>
            <div className="image-input">
              <input
                required
                name="image"
                type="url"
                className="image"
                id="image-text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <div className="title-notes">
              <label htmlFor="notes-text">Notes</label>
            </div>
            <div className="notes-input">
              <textarea
                name="notes"
                id="notes-text"
                rows="6"
                cols="10"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}></textarea>
            </div>
          </div>
          <div className="column-full">
            <div className="row button-row">
              <a className="delete-entry visibility-hidden">Delete Entry</a>
              <button type="submit">SAVE</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
