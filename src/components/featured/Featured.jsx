import React from 'react'
import "./Featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h4 className="title">Total Revenue</h4>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <div className="title">Total sales made today</div>
        <div className="amount">$500</div>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultAmout">$12K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmout">$12K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmout">$12K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
