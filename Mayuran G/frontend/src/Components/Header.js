import React from "react";

function  Header() {
     
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"red"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="/AddVehicle">Add Vehicle</a>
        <a className="nav-link" href="/AddRoute">Add Route</a>
        <a className="nav-link" href="/AddTransportPayment">Make Payment</a>
        <a className="nav-link" href="/VehicleList">Vehicle List</a>
        <a className="nav-link" href="/RouteList">Route List</a>
        <a className="nav-link" href="/TransportPaymentList"> TransportPayment List</a>
        <a className="nav-link" href="/ViewRouteDetails">Route Details</a>
        <a className="nav-link" href="/AddApplyTransport">Apply  Transports</a>

      </div>
    </div>
  </div>
</nav>

    )

}

export default Header;