import React from 'react'
import "./Single.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
           <div className="item">
              <img src="https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Snow Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">snowDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 1234567890</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Noida, Delhi</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
           </div> 
          <div className="right">
            <Chart aspect={3 /1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transcation</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default single
