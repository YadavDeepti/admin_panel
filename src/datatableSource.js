

export const userColumns=[
    {field: 'id', headerName: 'ID', width: 70},{
        field:"user", header:"User", width:230, renderCell:(params) => {
            return(
                <>
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
                </>
            )
        }
    },
    {field: 'email', headerName: 'Email', width: 230},
    {field: 'age', headerName: 'Age', width: 100},
    {field: 'status', headerName: 'Status', width: 150,
    renderCell:(params) =>{
        return(
        <>
        <div className={`cellWithStatus ${params.row.status}`}> {params.row.status}</div>
        </>
        )
    }
},
]


export const userRows =[
   
    {
        id:1,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:2,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"pending",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:3,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:4,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:5,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:6,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"pending",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:7,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:8,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:9,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:10,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:11,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:12,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:13,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:14,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id:1,
        username: "snow",
        img:"https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email: "1snow@gmail.com",
        age: 35,
    },
]