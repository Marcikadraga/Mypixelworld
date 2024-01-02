import React from 'react';
import usersData from '../datas/users.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye, faUsers } from '@fortawesome/free-solid-svg-icons';


export function Users() {

        return (
        <>
            <div className="table-container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Is admin</th>
                            <th scope="col">Registered at</th>
                            <th scope="col">Last login at</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                                <td>{user.registered_at}</td>
                                <td>{user.last_login_at}</td>
                                <td >
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
