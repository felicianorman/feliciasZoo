import Navbar from "./components/Navbar/Navbar";
import './pages/Home.scss'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="startPage">
        <h1>Välkommen till mitt Zoo!</h1>
      </div>
    </>
  );
}

export default App;
