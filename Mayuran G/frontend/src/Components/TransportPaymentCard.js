import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

const TransportPaymentCard = (props) => {

  const{_id,Company,Account_No,Date,Distance,Total}=props.transportpayments
  
  const id = _id.toString()

  const deleteTransportPayment = (_id) =>{
    //const id = TransportPayment._id 
    axios.delete(`http://localhost:5000/api/TransportPayment/${id}`).then(() =>{
     alert("TransportPayment Deleted Successfully")
     window.location.replace('/TransportPaymentList')
  })
  .catch((error) => {
      console.log(error.response.data)
  })
}

  return (
    <>  
      <tr>
        <td><center>{Company}</center></td>
        <td><center>{Account_No}</center></td>
        <td><center>{Date}</center></td>
        <td><center>{Distance}</center></td>
        <td><center>{Total}</center></td>
        
                                   
        <td>
            <Link to={{pathname: `/UpdateTransportPayment/${id}`}}>
            <button className="btn btn-success btn-sm">Update<i class="fa fa-pencil"></i></button>
            </Link>
        </td>
        <td>
            <button type="button" className="btn btn-danger btn-sm" onClick={deleteTransportPayment}>Delete<i class="fa fa-trash-o fa-lg"></i></button>
        </td>
        </tr>
    </> 
  )
}

export default TransportPaymentCard