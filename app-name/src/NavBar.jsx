export default function NavBar({ onClick }) {
  return (
    <header className="heading">
      <div className="container">
        <div className="row">
          <div className="column-full">
            <nav className="nav-bar">
              <h1>Code Journal</h1>
              <a
                id="entries-anchor"
                data-view="entries"
                className="nav-bar-title">
                <h4 onClick={() => onClick('entries')}>Entries</h4>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
