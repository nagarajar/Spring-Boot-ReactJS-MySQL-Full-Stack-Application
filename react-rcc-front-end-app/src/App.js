import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, withRouter } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import EmployeesListComponent from "./components/EmployeesListComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<EmployeesListComponent />}></Route>
            <Route path="/employees" element={<EmployeesListComponent />}></Route>
            <Route path="/add-employee" element={<CreateEmployeeComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
