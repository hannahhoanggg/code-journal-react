import Create from './Create';
import { data } from './data';

export default function Entries({ onClick }) {
  return (
    <div data-view="entries" className="entries">
      <div className="row">
        <div className="column-full">
          <div className="new-header">
            <h2>Entries</h2>
            <a
              data-view="entry-form"
              className="new-button"
              id="entry-form-anchor"
              onClick={() => onClick('create')}>
              NEW
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        {data.entries !== null ? (
          <div className="column-full">
            <p className="no-entries">No entries have been recorded.</p>
          </div>
        ) : (
          <ul className="entry-list">
            <Create />
          </ul>
        )}
      </div>
    </div>
  );
}
