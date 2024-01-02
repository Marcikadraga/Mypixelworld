import '../css/AdminPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPen,faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Users } from '../components/Users';
import { Drawings } from '../components/Drawings';
import { Statistics } from '../components/statistics';

export function AdminPage() {
    return (
        <div>
            <div className="admin-header">
                <FontAwesomeIcon className='admin-icon' icon={faStar} />
                <h1>Admin</h1>
            </div>
            <div className="d-flex align-items-start  w-100">
                <div className="nav flex-column nav-pills me-3 mb-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link btn active btn-block btn-sm" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#statistics" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><FontAwesomeIcon icon={faChartLine} /> Statistics</button>
                    <button className="nav-link btn btn-block btn-sm" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#users" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><FontAwesomeIcon icon={faUsers} /> Users</button>
                    <button className="nav-link btn btn-block btn-sm" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#drawings" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><FontAwesomeIcon icon={faPen} /> Drawings</button>

                </div>
                <div className="tab-content " id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="statistics" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">{<Statistics />}</div>
                    <div className="tab-pane fade " id="users" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">{<Users />}</div>
                    <div className="tab-pane fade" id="drawings" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">{<Drawings />}</div>
                </div>
            </div>
        </div>
    );
};