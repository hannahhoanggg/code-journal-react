import RenderEntry from './RenderEntry';
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
        {data.entries.length > 0 ? (
          <ul className="entry-list">
            <RenderEntry />
          </ul>
        ) : (
          <div className="column-full">
            <p className="no-entries">No entries have been recorded.</p>
          </div>
        )}
      </div>
    </div>
  );
}
