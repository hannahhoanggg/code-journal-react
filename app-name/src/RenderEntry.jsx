import { data } from './data';
import { FaPencilAlt } from 'react-icons/fa';

export default function RenderEntry({ viewPage, onClick }) {
  data.view = viewPage;

  function handleEdit(e) {
    onClick('create');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === e.target.key);
    }
  }

  return data.entries.map((entry) => (
    <li key={entry.entryId}>
      <div className="row">
        <div className="column-half">
          <img alt={entry.title} src={entry.imageUrl} />
        </div>
        <div className="column-half">
          <h2>
            {entry.title}
            <span onClick={handleEdit}>
              <FaPencilAlt />
            </span>
          </h2>
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  ));
}
