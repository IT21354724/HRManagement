import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

const VehicleCard = (props) => {

  const{_id,Vehicle_No,Vehicle_Type,Driver_Name,Driver_Contact_No,Driver_Nic,Company,No_Of_Seats}=props.vehicles
  
  const id = _id.toString()

  const deleteVehicle = (_id) =>{
    //const id = Vehicle._id 
    axios.delete(`http://localhost:5000/api/Vehicle/${id}`).then(() =>{
     alert("Vehicle Deleted Successfully")
     window.location.replace('/VehicleList')
  })
  .catch((error) => {
      console.log(error.response.data)
  })
}

  return (
    <>  
      <tr>
        <td><center>{Vehicle_No}</center></td>
        <td><center>{Vehicle_Type}</center></td>
        <td><center>{Driver_Name}</center></td>
        <td><center>{Driver_Contact_No}</center></td>
        <td><center>{Driver_Nic}</center></td>
        <td><center>{Company}</center></td>
        <td><center>{No_Of_Seats}</center></td>
                                   
        <td>
            <Link to={{pathname: `/UpdateVehicle/${id}`}}>
            <button className="btn btn-success btn-sm">Update<i class="fa fa-pencil"></i></button>
            </Link>
        </td>
        <td>
            <button type="button" className="btn btn-danger btn-sm" onClick={deleteVehicle}>Delete<i class="fa fa-trash-o fa-lg"></i></button>
        </td>
        </tr>
    </> 
  )
}

export default VehicleCard