import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Plot from 'react-plotly.js'

const VehicleReport = () => {
       
    const [Vehicles, setVehicles] = useState([])
     
    //Retrieve all the resources
    const retrieveVehicles = () => {
        axios.get("http://localhost:5000/api/Vehicle").then((res) =>{
            setVehicles(res.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }
  
    useEffect(() => {
      retrieveVehicles()
    },[])

    const bus = Vehicles.filter((vehicle) => {
        return vehicle.Vehicle_Type === "Bus"
    })

    const van = Vehicles.filter((vehicle) => {
        return vehicle.Vehicle_Type === "Van"
    })

    const vehicleName = [
        {
            x: ["Bus"],
            y: [bus.length],
            type: 'bar',
            marker: {color: 'green'},
        },
        {
            x: ["Van"],
            y: [van.length],
            type: 'bar',
            marker: {color: 'blue'},
        }
    ]

    const seatsLayout = {
        title: 'Available Seats Per Vehicle Type',
        xaxis: {
            title:'VehicleType',
        },
        yaxis: {
            title:'Seats',
        },
        height: 400,
        width: 450

    }

    const vehicleNo= []
    const noSeats = [] 
     

    Vehicles.map((vehicle) => {
        vehicleNo.push(vehicle.Vehicle_No)
        noSeats.push(vehicle.No_Of_Seats)
        
    })

    const vehicles = [
        {
            labels: vehicleNo,
            values: noSeats,
            hole: .4,
            type: "pie"
        }
    ]

  return (
    <>
    <center>
        <Plot data={vehicleName} layout={seatsLayout}/>
        <Plot data={vehicles} layout={{title: 'Available Seats', height:400, width: 450}}/>
    </center>
    </>
  )
}

export default VehicleReport
