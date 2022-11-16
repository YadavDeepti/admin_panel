import React from 'react'
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
     <div className="top"><span className="logo">DY</span></div>
     <hr />
     <div className="centre">
        <ul>
          <p className="title">MAIN</p>
           <li> <DashboardIcon className='icon'/> <span>Dashboard</span></li>
           <p className="title">LISTS</p>
           <li><PersonIcon className='icon'/> <span>Users</span></li>
           <li><Inventory2Icon className='icon'/> <span>Products</span></li>
           <li><ViewStreamIcon className='icon'/> <span>Orders</span></li> 
           <li><LocalShippingIcon className='icon'/> <span>Delivery</span></li>
           <p className="title">USEFUL</p>
           <li><QueryStatsIcon className='icon'/> <span>Stats</span></li>
           <li><NotificationsIcon className='icon'/><span>Notification</span></li>
           <li><PsychologyIcon className='icon'/><span>Logs</span></li>
           <p className="title">SERVICE</p>
           <li><WysiwygIcon className='icon'/><span>System Health</span></li>
           <li>< SettingsIcon className='icon'/><span>Settings</span></li>
           <p className="title">USER</p>
           <li><AccountBoxIcon className='icon'/><span>Profile</span></li>
           <li><LogoutIcon className='icon'/> <span>Log Out</span></li>
        </ul>
     </div>
     <div className="bottom">
      <div className="colorOptions"></div>
      <div className="colorOptions"></div>
     </div>
    </div>
  )
}

export default Sidebar
