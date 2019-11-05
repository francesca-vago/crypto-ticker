import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMoneyCheck, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <div>
      <div className="avatarContainer">
        <img className="avatar-bordered" alt="avatar-bordered" src="https://kitt.lewagon.com/placeholder/users/sarahlafer" />
      </div>
      <ListGroup>
        <ListGroupItem className="d-flex">
          <FontAwesomeIcon icon={faChartLine} />
          <p className="ml-3">Dashboard</p>
        </ListGroupItem>
        <ListGroupItem className="d-flex">
          <FontAwesomeIcon icon={faMoneyCheck} />
          <p className="ml-3">Accounts</p>
        </ListGroupItem>
        <ListGroupItem className="d-flex">
          <FontAwesomeIcon icon={faCogs} />
          <p className="ml-3">Settings</p>
        </ListGroupItem>
        <ListGroupItem className="d-flex">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <p className="ml-3">Log Out</p>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default SideBar;
