import "./App.css";
import Home from "./Home";
import NavBar from "./common/NavBar";
import AddEmployee from "./components/AddEmployee";
import EmployeeListComponent from "./components/EmployeeListComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/view-employees"
            element={<EmployeeListComponent />}
          ></Route>
          <Route exact path="/add-employee" element={<AddEmployee />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
