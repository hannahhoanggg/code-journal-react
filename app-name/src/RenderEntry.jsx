import { data } from './data';

export default function RenderEntry({ viewPage }) {
  data.view = viewPage;
  return data.entries.map((entry) => (
    <li key={entry.entryId}>
      <div className="row">
        <div className="column-half">
          <img alt={entry.title} src={entry.imageUrl} />
        </div>
        <div className="column-half">
          <h2>
            {entry.title}
            <i className="fa-solid fa-pencil"></i>
          </h2>
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  ));
}
