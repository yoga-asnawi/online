import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";

function App() {
    return ( 
      <>
        <Particles 
        className="particles-canvas-yy"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 850
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00"
                }
              }
            }
          }}
        />
        <Navbar />
        <Header />
      </>


    );
}

export default App;