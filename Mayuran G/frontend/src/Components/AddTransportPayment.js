import React, {useState} from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddTransportPayment() {

const [Company,setCompany] = useState("");
const [Account_No,setAccount_No] = useState();
const [Date,setDate] = useState("");
const [Distance,setDistance] = useState();
//const [Total,setTotal] = useState();

const Total = Distance*100+40000
 
function sendData(e){
       e.preventDefault();
  

   const  newTransportPayment ={
      Company,
      Account_No,
      Date,
      Distance,
      Total
   } 
 
axios.post("http://localhost:5000/api/TransportPayment/",newTransportPayment).then(()=>{
  alert("TransportPayment Added")
  window.location.replace('/TransportPaymentList')

}).catch((err)=>{
  console.log(err.response.data)
})
   
}


  return (
    <div className="container">
    <Form onSubmit={sendData}>
     <center><h>Transport Payment</h></center> 
    
       <div class="row">
       <div className="col-6">
          <label for="Company">Company</label>
           <input type="text" class="form-control" id="Company" placeholder="Enter Company"
           onChange={(e)=>{
            setCompany(e.target.value);
           }} />
       </div>
     

       <div className="col-6">
          <label for="Account_No">Account_No</label>
           <input type="number" class="form-control" id="Account_No" placeholder="Enter Account_No"
           onChange={(e)=>{
            setAccount_No(e.target.value);
           }} />
       </div>

       <div className="col-6">
          <label for="Date">Date</label>
           <input type="date" class="form-control" id="Date" placeholder="Enter Date"
           onChange={(e)=>{
            setDate(e.target.value);
           }} />
       </div>

       <div className="col-6">
          <label for="Distance">Distance</label>
           <input type="number" class="form-control" id="Distance" placeholder="Enter Distance"
            onChange={(e)=>{
               setDistance(e.target.value);
              }} />
       </div>

       <div className="col-6">
          <label for="Total">Total</label>
           <input type="number" class="form-control" id="Total" value={Total} disabled/>
       </div>
       </div>

      <Button  type="submit" class="btn btn-primary">Pay</Button>
       
    </Form>
  
    </div>
  );
}

