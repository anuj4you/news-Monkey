import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <h2 style={{marginTop: "70px"}}>Todays headlines</h2>
      <News/>

    </div>
  );
}

export default App;
