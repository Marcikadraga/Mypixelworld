
import drawingsData from '../datas/drawings.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

import { DrawingComponent } from '../components/DrawingComponent';

export function Drawings() {
  return (
    <>
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Art</th>
              <th scope="col">Name</th>
              <th scope="col">User id</th>
              <th scope="col">Created at</th>
              <th scope="col">Updated at</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {drawingsData.drawings.map((drawing) => (
              <tr key={drawing.id}>
                <td>{drawing.id}</td>
                <DrawingComponent drawing={drawing} />
                <td>{drawing.name}</td>
                <td>{drawing.owner_id}</td>
                <td>{drawing.created_at}</td>
                <td>{drawing.updated_at}</td>
                <td>
                  <button><FontAwesomeIcon icon={faEdit} /></button>
                  <button><FontAwesomeIcon icon={faEye} /></button>
                  <button><FontAwesomeIcon icon={faTrash} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
