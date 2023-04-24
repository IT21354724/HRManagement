
import AddVehicle from './Components/AddVehicle';
import AddRoute from './Components/AddRoute';
import UpdateVehicle from './Components/UpdateVehicle';
import AddTransportPayment from './Components/AddTransportPayment';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AddApplyTransport from './Components/AddApplyTransport';
import VehicleList from './Components/VehicleList';
import RouteList from './Components/RouteList';
import UpdateRoute from './Components/UpdateRoute';
import TransportPaymentList from './Components/TransportPaymentList'
import ViewRouteDetails from './Components/ViewRouteDetails';
import VehicleReport from './Components/VehicleReport';
import UpdateTransportPayment from './Components/UpdateTransportPayment';

function App() {
  return (
    <Router>
  <div>
    <Header />
    <Routes>
      <Route path ='/VehicleList' element={<VehicleList />} />
      <Route path ='/AddVehicle' element={<AddVehicle />} />
      <Route path ='/UpdateVehicle/:id' element={<UpdateVehicle />} />
      <Route path ='/AddRoute' element={<AddRoute />} />
      <Route path ='/AddApplyTransport' element={<AddApplyTransport />} />
      <Route path ='/AddTransportPayment' element={<AddTransportPayment />} />
      <Route path ='/RouteList' element={<RouteList />} />
      <Route path ='/VehicleReport' element={<VehicleReport />} />
      <Route path ='/TransportPaymentList' element={<TransportPaymentList />} />
      <Route path ='/UpdateRoute/:id' element={<UpdateRoute />} />
      <Route path ='/ViewRouteDetails' element={<ViewRouteDetails />} />
      <Route path ='/UpdateTransportPayment/:id' element={<UpdateTransportPayment />} />

    </Routes>
  </div>
  </Router>
  );  
}

export default App; 
