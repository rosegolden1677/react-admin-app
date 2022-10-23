import './Widget.scss';

// import material ui icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  //temporary
  const amount = 100;
  const diff = 20;

  let data;

  // change object base on prop type
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: (
          <Link to="/users" style={{ textDecoration: 'none' }}>
            See all users
          </Link>
        ),
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'earnings':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      {/* title, counter, link */}
      <div className="left">
        <span className="title">{data.title}</span>
        {/* condition to display $ sign */}
        <span className="counter">
          {data.isMoney && '$'} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>

      {/* percentage & icons */}
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
