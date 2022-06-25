import "./sidebar.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import RouterIcon from "@mui/icons-material/Router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CastConnectedIcon from "@mui/icons-material/CastConnected";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
/* import { Link } from "react-router-dom" */

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        {/* <Link to="/" style={{ textdecoration: "none" }}> */}
        <span className="logo">Program Management</span>
        {/* </Link> */}
      </div>
      <div className="center">
        <hr />
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">IoT</p>
          <li>
            <LocationOnIcon className="icon" />
            <span>Asset Tracking</span>
          </li>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>Care Process</span>
          </li>
          <li>
            <ElectricMeterIcon className="icon" />
            <span>Energy</span>
          </li>
          <li>
            <GasMeterIcon className="icon" />
            <span>Metering</span>
          </li>
          <li>
            <DirectionsCarIcon className="icon" />
            <span>Mobility</span>
          </li>
          <li>
            <RouterIcon className="icon" />
            <span>Things Ready</span>
          </li>
          <p className="title">Espacios</p>
          <li>
            <DeviceHubIcon className="icon" />
            <span>Corporate</span>
          </li>
          <li>
            <CastConnectedIcon className="icon" />
            <span>Retail</span>
          </li>
          <li>
            <LocationCityIcon className="icon" />
            <span>Smart Cities</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
