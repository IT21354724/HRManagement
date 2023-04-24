import React, { useState, useEffect } from 'react';
import axois from "axios";
import { Link } from 'react-router-dom';
import RouteCard from './RouteCard'

export default function RouteList() {

    const [Routes, setRoutes] = useState([]);
    const [Keyword, setKeyword] = useState('')

    useEffect(() => {
        function getRoutes() {
            axois.get("http://localhost:5000/api/Route/").then((res) => {
                console.log(res.data);
                setRoutes(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getRoutes();
    }, [])
    const filteredRoutes = Routes.filter((route) => {
        const routeName = route.Route_Name.toLowerCase()

        const vehicleNo = route.Vehicle_No.toLowerCase()
        const keyword = Keyword.toLowerCase()

        return routeName.includes(keyword) || vehicleNo.includes(keyword)
    })

    const renderRoutesList = filteredRoutes.map((routes) => {
        return (
            <RouteCard routes={routes} />
        )
    })

    return (
        <div>
            <br></br>

            <div>
                <div style={{ width: "90%", margin: "auto" }}>

                    <div style={{ marginRight: "0px", marginLeft: "auto", width: "30%" }}>

                        <form class="d-flex" role="search">
                            <a style={{ marginRight: "0px", marginLeft: "auto" }} href="/AddRoute" className="btn btn-primary" >Add Route <i class="fa fa-plus"></i></a>
                            <a style={{ marginRight: "0px", marginLeft: "10px" }} href="/" className="btn btn-secondary">Report<i class="fa fa-bar-chart"></i></a>
                        </form>
                    </div>


                    <h1>Route Details</h1>

                    <input type="text" class="form-control" id='searchRoute' placeholder='Enter Search Keyword' value={Keyword} onChange={(e) => setKeyword(e.target.value)} />

                    <div class="leave-list">
                        <div class="row justify-content-center">
                            <table className="table table-striped table-hover" style={{ fontSize: "13px" }}>
                                <tr>
                                    <th><center>Route_Name</center></th>
                                    <th><center>Vehicle_Type</center></th>
                                    <th><center>Vehicle_No</center></th>
                                    <th><center>Arrival_Time</center></th>
                                    <th><center>Starting_Point</center></th>
                                    <th><center>Ending_Point</center></th>
                                    <th></th>
                                </tr>

                                <tbody>
                                    {renderRoutesList}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}


