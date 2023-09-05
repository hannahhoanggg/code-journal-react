import { useState } from 'react';

export default function Create() {
  const [imageUrl, setImageUrl] = useState(
    '/images/placeholder-image-square.jpg'
  );
  return (
    <div data-view="entry-form" className="entry-form">
      <form className="form">
        <div className="row">
          <div className="column-full">
            <div className="top-header">
              <h2>New Entry</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column-full column-half">
            <img src={imageUrl} alt="placeholder img" />
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
                cols="10"></textarea>
            </div>
          </div>
          <div className="column-full">
            <div className="row button-row">
              <a className="delete-entry visibility-hidden">Delete Entry</a>
              <button>SAVE</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
