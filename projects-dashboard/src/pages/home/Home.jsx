import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Cantidad de proyectos" />
          <Widget type="Cantidad de proyectos" />
          <Widget type="Cantidad de proyectos" />
          <Widget type="Cantidad de proyectos" />
        </div>
        <div className="charts">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
