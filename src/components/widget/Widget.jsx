import React from 'react'
import "./Widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import PercentIcon from '@mui/icons-material/Percent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({ type }) => {

  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch(type){
    case "user":
      data ={
        title : "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonIcon className='icon' 
        style={{
          color: "rgb(126, 39, 126)",
          backgroundColor: "rgb(225, 166, 225)",
          borderRadius: "5px"
        }}/>
      };
      break;

      case "order":
      data ={
        title : "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartIcon className='icon' 
        style={{
          color: "rgb(224,224,0)",
          backgroundColor: "rgb(255,255,199)",
          borderRadius: "5px"
        }}/>
      };
      break;

      case "earning":
      data ={
        title : "Earning",
        isMoney: true,
        link: "View net earning",
        icon: <MonetizationOnIcon className='icon' 
        style={{
          color: "green",
          backgroundColor: "lightGreen",
          borderRadius: "5px"
        }}/>
      };
      break;

      case "balance":
      data ={
        title : "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletIcon className='icon' 
        style={{
          color: "crimson",
          backgroundColor: "rgb(255,160,122)",
          borderRadius: "5px"
        }}/>
      };
      break;
      default:
        break;
  }



  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counters">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} 
          <PercentIcon />
          </div>
          {data.icon}
      </div>
    </div>
  )
}

export default Widget
