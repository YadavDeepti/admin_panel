import React from 'react'
import "./Datatable.scss";
import { DataGrid} from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource';
import {Link} from "react-router-dom"


const Datatable = () => {

const actionColumn =[{field:"action", headerName:"Action", width:250, renderCell: ()=>{
  return(
    <div className="cellAction">
      <Link to="/users/test" style={{textDecoration: "none"}}>
      <div className="viewButton">View</div>
      </Link>
      
      <div className="deleteButton">Delete</div>
    </div>
  )
}}];

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
        Add New
        </Link>
      </div>

      <DataGrid className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
