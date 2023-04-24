import React, {useState, useEffect} from 'react';
import axois from "axios";
import { Link} from 'react-router-dom';
import TransportPaymentCard from './TransportPaymentCard'

export default function  TransportPaymentList(){

const [TransportPayments, setTransportPayments] = useState([]);
const[Keyword, setKeyword] = useState('')

useEffect(() => {
   function getTransportPayments(){
        axois.get("http://localhost:5000/api/TransportPayment/",).then((res) => {
           console.log(res.data);
            setTransportPayments(res.data);   
        }).catch((err) => {
          alert(err.message);
        })
   }  
getTransportPayments();
},[])
 const filteredTransportPayments=TransportPayments.filter((transportpayment) => {
     const  company = transportpayment.Company.toLowerCase()
     const date = transportpayment.Date.toLowerCase()
     
     const keyword = Keyword.toLowerCase()

     return company.includes(keyword)  || date.includes(keyword) 
 })

    
const renderTransportPaymentsList =filteredTransportPayments.map((transportpayments) =>{
   return(
          <TransportPaymentCard transportpayments={transportpayments}/>
   )

})
return(
  <div>
      <br></br>
              <h1>TransportPayment Details</h1>
       
              <input type="text" class="form-control" id='searchTransportPayment' placeholder='Enter Search Keyword' value={Keyword} onChange={(e) => setKeyword(e.target.value)} />
       <a style={{marginRight:"0px", marginLeft:"auto"}} href="/AddTransportPayment" className="btn btn-primary" >Add Payment <i class="fa fa-plus"></i></a>
                      <a style={{marginRight:"0px", marginLeft:"10px"}} href="/" className="btn btn-secondary">Report<i class="fa fa-bar-chart"></i></a>
              <table className="table table-striped table-hover" style={{fontSize:"13px"}}>
                  <tr>
                      <th><center>Company</center></th>
                      <th><center>Account_No</center></th>
                      <th><center>Date</center></th>
                      <th><center>Distance</center></th>
                      <th><center>Total</center></th>
                      
                      <th></th>
                  </tr>

                  <tbody>
                      {renderTransportPaymentsList}
                  </tbody>
              </table>
          </div>
    
)

}

 
