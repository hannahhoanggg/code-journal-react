export default function Entries() {
  return (
    <div data-view="entries" className="entries hidden">
      <div className="row">
        <div className="column-full">
          <div className="new-header">
            <h2>Entries</h2>
            <a
              data-view="entry-form"
              className="new-button"
              id="entry-form-anchor">
              NEW
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <p className="no-entries">No entries have been recorded.</p>
        </div>
        <ul className="entry-list" />
      </div>
    </div>
  );
}
