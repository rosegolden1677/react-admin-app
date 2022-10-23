import './Sidebar.scss';

// icons from material ui
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      {/* logo */}
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">admin</span>
        </Link>
      </div>

      {/* horizontal line */}
      <hr />

      {/* logo */}
      <div className="center">
        <ul>
          {/* TITLE */}
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          {/* TITLE */}
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
          {/* TITLE */}
          <p className="title">USEFUL</p>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
          </Link>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <NotificationsNoneOutlinedIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>
          {/* TITLE */}
          <p className="title">SERVICE</p>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
          </Link>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          {/* TITLE */}
          <p className="title">USER</p>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/error" style={{ textDecoration: 'none' }}>
            <li>
              <ExitToAppOutlinedIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>

      {/* logo */}
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
