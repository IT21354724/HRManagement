import React, {useState} from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddVehicle() {

const [Vehicle_No,setVehicle_No] = useState("");
const [Vehicle_Type,setVehicle_Type] = useState("");
const [Driver_Name,setDriver_Name] = useState("");
const [Driver_Contact_No,setDriver_Contact_No] = useState();
const [Driver_Nic,setDriver_Nic] = useState("");
const [Company,setCompany] = useState("");
const [No_Of_Seats,setNo_Of_Seats] = useState();

function sendData(e){
       e.preventDefault();

   const  newVehicle ={
      Vehicle_No,
      Vehicle_Type,
      Driver_Name,
      Driver_Contact_No,
      Driver_Nic,
      Company,
      No_Of_Seats
   } 
 
axios.post("http://localhost:5000/api/Vehicle/",newVehicle).then(()=>{
  alert("Vehicle Added")
  window.location.replace('/VehicleList')

}).catch((err)=>{
  console.log(err.response.data)
})
   
}


  return (
    <div className="container">
    <Form onSubmit={sendData}>
     <center><h>Create Vehicle</h></center> 
    
       <div class="row">
       <div className="col-6">
          <label for="Vehicle_No">Vehicle_No</label>
           <input type="text" class="form-control" id="Vehicle_No" placeholder="Enter Vehicle_No"
           onChange={(e)=>{
            setVehicle_No(e.target.value);
           }} />
       </div>
     

         <div className="col-6">
          <label for="Vehicle_Type">Vehicle_Type</label>
          <select class="form-select" id="Vehicle_Type" name="Vehicle_Type" onChange={(e) => setVehicle_Type(e.target.value)}>
            <option selected>Select Vehicle Type</option>
          <option value="Bus">Bus</option>
           <option value="Van">Van</option>
           </select>
       </div>

       <div className="col-6">
          <label for="Driver_Name">Driver_Name</label>
           <input type="text" class="form-control" id="Driver_Name" placeholder="Enter Driver_Name"
           onChange={(e)=>{
            setDriver_Name(e.target.value);
           }} />
       </div>

       <div className="col-6">
          <label for="Driver_Contact_No">Driver_Contact_No</label>
           <input type="number" class="form-control" id="Driver_Contact_No" placeholder="Enter Driver_Contact_No"
            onChange={(e)=>{
               setDriver_Contact_No(e.target.value);
              }} />
       </div>

       <div className="col-6">
          <label for="Driver_Nic">Driver_Nic</label>
           <input type="text" class="form-control" id="Driver_Nic" placeholder="Enter Driver_Nic"
            onChange={(e)=>{
               setDriver_Nic(e.target.value);
              }} />
       </div>

       <div className="col-6">
          <label for="Company">Company</label>
           <input type="text" class="form-control" id="Company" placeholder="Enter Company"
            onChange={(e)=>{
               setCompany(e.target.value);
              }} />
       </div>

       <div className="col-6">
          <label for="No_Of_Seats">No_Of_Seats</label>
           <input type="number" class="form-control" id="No_Of_Seats" placeholder="Enter No_Of_Seats"
            onChange={(e)=>{
               setNo_Of_Seats(e.target.value);
              }} />
       </div>
       </div>

      <Button  type="submit" class="btn btn-primary">Submit</Button>
       
    </Form>
  
    </div>
  );
  
}

