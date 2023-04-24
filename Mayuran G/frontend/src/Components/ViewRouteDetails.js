import React, { useState, useEffect } from 'react';
import axois from "axios";
import { Link } from 'react-router-dom';
import RouteCard from './RouteCard'

export default function ViewRouteDetails() {

    const [Routes, setRoutes] = useState([]);

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



    return (
        <div class="leave-list">
            <div class="row justify-content-center">
                <table className="table table-striped table-hover">
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
                        {
                            Routes.map((Route) => (
                                <tr>
                                    <td><center>{Route.Route_Name}</center></td>
                                    <td><center>{Route.Vehicle_Type}</center></td>
                                    <td><center>{Route.Vehicle_No}</center></td>
                                    <td><center>{Route.Arrival_Time}</center></td>
                                    <td><center>{Route.Starting_Point}</center></td>
                                    <td><center>{Route.Ending_Point}</center></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}


