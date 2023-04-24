import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import VehicleCard from './VehicleCard'


export default function VehicleList() {

    const [Vehicles, setVehicles] = useState([]);
    const [Keyword, setKeyword] = useState('')

    useEffect(() => {
        function getVehicles() {
            axios.get("http://localhost:5000/api/Vehicle/").then((res) => {
                console.log(res.data);
                setVehicles(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getVehicles();
    }, [])
    //Search functions 
    const filteredVehicles = Vehicles.filter((vehicle) => {
        const vehicleNo = vehicle.Vehicle_No.toLowerCase()
        const vehicleType = vehicle.Vehicle_Type.toLowerCase()
        const driverName = vehicle.Driver_Name.toLowerCase()
        const company = vehicle.Company.toLowerCase()
        const keyword = Keyword.toLowerCase()

        return vehicleNo.includes(keyword) || vehicleType.includes(keyword) || driverName.includes(keyword) || company.includes(keyword)
    })

    const renderVehiclesList = filteredVehicles.map((vehicles) => {
        return (
            <VehicleCard vehicles={vehicles} />
        )
    })

    return (
        <div>
            <br></br>
            <div>
                <div style={{ width: "90%", margin: "auto" }}>

                    <div style={{ marginRight: "0px", marginLeft: "auto", width: "30%" }}>

                        <form class="d-flex" role="search">
                            <a style={{ marginRight: "0px", marginLeft: "auto" }} href="/AddVehicle" className="btn btn-primary" >Add Vehicle <i class="fa fa-plus"></i></a>
                            <a style={{ marginRight: "0px", marginLeft: "10px" }} href="/VehicleReport" className="btn btn-secondary"><i class="fa fa-bar-chart"> Report</i></a>
                        </form>
                    </div>



                    <input type="text" class="form-control" id='searchVehicle' placeholder='Enter Search Keyword' value={Keyword} onChange={(e) => setKeyword(e.target.value)} />
                    <div class="leave-list">
                        <div class="row justify-content-center">
                        <table className="table table-striped table-hover" style={{ fontSize: "13px" }}>
                        <tr>
                            <th><center>Vehicle No</center></th>
                            <th><center>Vehicle Type</center></th>
                            <th><center>Driver Name</center></th>
                            <th><center>Driver Contact No</center></th>
                            <th><center>Driver NIC</center></th>
                            <th><center>Company</center></th>
                            <th><center>No Of Seats</center></th>
                            <th></th>
                        </tr>

                        <tbody>
                            {renderVehiclesList}
                        </tbody>
                    </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}


