import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import Sidebar from "./components/sidebar/Sidebar";
import Add from "./pages/Add/Add";
import Order from "./pages/Orders/Order";
import List from "./pages/List/List";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer />
      <AdminNavbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add></Add>} />
          <Route path="/list" element={<List></List>} />
          {/* <Route path="/order" element={<Order></Order>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
