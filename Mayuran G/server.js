const express = require("express");
const  cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const VehicleRoutes = require("./routes/Vehicle.routes"); 
const RouteRoutes = require("./routes/Route.routes");
const TransportPaymentRoutes = require("./routes/TransportPayment.routes");
const ApplyTransportRoutes = require("./routes/ApplyTransport.routes");


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

connectDB();

const PORT = 5000;

app.get("/", (req,res ) => {res.send("Hello World")});

app.use("/api/Vehicle", VehicleRoutes);
app.use("/api/Route",RouteRoutes);
app.use("/api/TransportPayment",TransportPaymentRoutes);
app.use("/api/ApplyTransport",ApplyTransportRoutes);

app.listen(PORT, () => {console.log("Server is start and running on ",PORT);});

