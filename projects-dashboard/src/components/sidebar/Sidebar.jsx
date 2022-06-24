import "./sidebar.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import RouterIcon from "@mui/icons-material/Router";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">Program Management</div>
      {/* <Link to="/" style={{ textdecoration: "none" }}>
        <span className="logo">Program Management</span>
      </Link> */}
      <div className="center">
        <ul>
          <p className="title">CATEGORIES</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <LocationOnIcon className="icon" />
            <span>Mobility</span>
          </li>
          <li>
            <GasMeterIcon className="icon" />
            <span>Metering</span>
          </li>
          <li>
            <RouterIcon className="icon" />
            <span>Things Ready</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
