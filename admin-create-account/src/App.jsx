
import "../src/Style/main.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Events from "./Pages/Events";
import Myaccount from "./Pages/Myaccount";
import Accounts from "./Pages/Accounts";
import LatestActivity from "./Pages/LatestActivity";
import Chat from "./Pages/Chat";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <Router>
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Myaccount" element={<Myaccount />} />
      <Route path="/Accounts" element={<Accounts />} />
      <Route path="/LatestActivity" element={<LatestActivity/>} />
      <Route path="/Chat" element={<Chat />} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
