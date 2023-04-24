import React, { useState, useEffect } from 'react'
import { Link, useParams, withRouter } from 'react-router-dom';
import axios from "axios"

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateRoute = (props) => {

    //To get the id from URL
    const { id } = useParams()

    const [Route_Name, setRoute_Name] = useState("");
    const[Vehicle_Type,setVehicle_Type] =useState("");
    const [Vehicle_No, setVehicle_No] = useState("");
    const [Arrival_Time, setArrival_Time] = useState("");
    const [Starting_Point, setStarting_Point] = useState("");
    const [Ending_Point, setEnding_Point] = useState("");
    const [Distance, setDistance] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Route/${id}`).then((res) => {
            console.log(res.data)
            setArrival_Time(res.data.Arrival_Time)
            setVehicle_Type(res.data.Vehicle_Type)
            setDistance(res.data.Distance)
            setEnding_Point(res.data.Ending_Point)
            setRoute_Name(res.data.Route_Name)
            setStarting_Point(res.data.Starting_Point)
            setVehicle_No(res.data.Vehicle_No)
        })
            .catch((error) => {
                console.log(error.response.data)
            })
    }, [])

    const update = (e) => {
        e.preventDefault() //Like preventing page to refresh

        const Routes = {
            Route_Name,
            Vehicle_Type,
            Vehicle_No,
            Arrival_Time,
            Starting_Point,
            Ending_Point,
            Distance
        }

        if (Route_Name === "" ||Vehicle_Type ===""|| Vehicle_No === "" || Arrival_Time === "" || Starting_Point === "" || Ending_Point === "" || Distance === "") {
            //So if either any of this is empty the function will alert and return back
            alert("All the fields are mandatory")
            return
        }


        axios.put(`http://localhost:5000/api/Route/${id}`, Routes).then(() => {
            alert("Routes Updated Successfully")
            window.location.replace('/RouteList')
        })
            .catch((error) => {
                console.log(error.response.data)
            })


    }

    return (
        <div class="container">
            <form onSubmit={update}>

                <center><h3>Update Route</h3></center>

                <div class="row">
                <div className="col-6">
                    <label for="Route_Name">Route_Name</label>
                    <input type="text" class="form-control" id="Route_Name" placeholder="Enter Route_Name" value={Route_Name}
                        onChange={(e) => {
                            setRoute_Name(e.target.value);
                        }} />
                </div>
         
                <div className="col-6">
                    <label for="Vehicle_Type">Vehicle_Type</label>
                    <input type="text" class="form-control" id="Vehicle_Type" placeholder="Enter Vehicle_Type" value={Vehicle_Type}
                        onChange={(e) => {
                            setVehicle_No(e.target.value);
                        }} />
                        </div>
         

                <div className="col-6">
                    <label for="Vehicle_No">Vehicle_No</label>
                    <input type="text" class="form-control" id="Vehicle_No" placeholder="Enter Vehicle_No" value={Vehicle_No}
                        onChange={(e) => {
                            setVehicle_No(e.target.value);
                        }} />
                </div>
         

                <div className="col-6">
                    <label for="Arrival_Time">Arrival_Time</label>
                    <input type="time" class="form-control" id="Arrival_Time" placeholder="Enter Arrival_Time" value={Arrival_Time}
                        onChange={(e) => {
                            setArrival_Time(e.target.value);
                        }} />
                </div>
         

                <div className="col-6">
                    <label for="Starting_Point">Starting_Point</label>
                    <input type="text" class="form-control" id="Starting_Point" placeholder="Enter Starting_Point" value={Starting_Point}
                        onChange={(e) => {
                            setStarting_Point(e.target.value);
                        }} />
                </div>
         

                <div className="col-6">
                    <label for="Ending_Point">Ending_Point</label>
                    <input type="text" class="form-control" id="Ending_Point" placeholder="Enter Ending_Point" value={Ending_Point}
                        onChange={(e) => {
                            setEnding_Point(e.target.value);
                        }} />
                </div>
         

                <div className="col-6">
                    <label for="Distance">Distance</label>
                    <input type="number" class="form-control" id="Distance" placeholder="Enter Distance" value={Distance}
                        onChange={(e) => {
                            setDistance(e.target.value);
                        }} />
                </div>
                </div>
         
                <Button type="submit" class="btn btn-primary">Update</Button>

            </form>

        </div>
    );
}
export default UpdateRoute