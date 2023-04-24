import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

const RouteCard = (props) => {

  const { _id, Route_Name, Vehicle_Type, Vehicle_No, Arrival_Time, Starting_Point, Ending_Point } = props.routes

  const id = _id.toString()

  const deleteRoute = (_id) => {
    //const id = Vehicle._id 
    axios.delete(`http://localhost:5000/api/Route/${id}`).then(() => {
      alert("Route Deleted Successfully")
      window.location.replace('/RouteList')
    })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  return (
    <>
      <tr>
        <td><center>{Route_Name}</center></td>
        <td><center>{Vehicle_Type}</center></td>
        <td><center>{Vehicle_No}</center></td>
        <td><center>{Arrival_Time}</center></td>
        <td><center>{Starting_Point}</center></td>
        <td><center>{Ending_Point}</center></td>



        <td>
          <Link to={{ pathname: `/UpdateRoute/${id}` }}>
            <button className="btn btn-success btn-sm">Update<i class="fa fa-pencil"></i></button>
          </Link>
        </td>
        <td>
          <button type="button" className="btn btn-danger btn-sm" onClick={deleteRoute}>Delete<i class="fa fa-trash-o fa-lg"></i></button>
        </td>
      </tr>
    </>
  )
}

export default RouteCard