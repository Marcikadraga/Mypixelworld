import React, { useState } from 'react';
import drawingsData from '../datas/drawings.json';
import usersData from '../datas/users.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPen,faUserSlash, faClapperboard } from '@fortawesome/free-solid-svg-icons';

export function Statistics() {

    const drawings=drawingsData.drawings;
    const users=usersData.users;

    const activeUsers= users.filter(user => !user.isBaned).length;
    const bannedUsers = users.filter(user => user.isBaned).length;

    console.log(bannedUsers)

    return (
        <div className='statistics'>
            <div className="statistic">
                <h1><FontAwesomeIcon icon={faUsers} /></h1>
                <h3>Users</h3>
                <h1>{activeUsers}</h1>
            </div>
            <div className="statistic">
                <h1><FontAwesomeIcon icon={faUserSlash} /></h1>
                <h3>Banned Users</h3>
                <h1>{bannedUsers}</h1>
            </div>
            <div className="statistic">
                <h1><FontAwesomeIcon icon={faPen} /></h1>
                <h3>Drawings</h3>
                <h1>{drawings.length}</h1>
            </div>
            <div className="statistic">
                <h1><FontAwesomeIcon icon={faClapperboard} /></h1>
                <h3>Animation</h3>
                <h1>1</h1>
            </div>

        </div>
    );
}
