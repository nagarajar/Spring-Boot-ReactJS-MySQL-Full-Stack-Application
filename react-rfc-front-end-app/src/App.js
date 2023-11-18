import "./App.css";
import Home from "./Home";
import NavBar from "./common/NavBar";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeListComponent from "./components/EmployeeListComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeProfile from "./components/EmployeeProfile";

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
          <Route
            exact
            path="/edit-employee/:id"
            element={<EditEmployee />}
          ></Route>
          <Route
            exact
            path="/employee-profile/:id"
            element={<EmployeeProfile />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
