import { Link } from 'react-router-dom';

const NavItem = ({ to, label }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link text-white" aria-current="page">
      {label}
    </Link>
  </li>
);

export default NavItem;