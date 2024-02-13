import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Login from "./Components/Login";
import { Routes, Route} from "react-router-dom"
import StudentForm from "./ResistrationForm/StudentForm";
import IndustrialForm from "./ResistrationForm/IndustrialForm";
import AdminForm from "./ResistrationForm/AdminForm";
import StudentDashboard from "./Dashboard/StudentDashboard";
import AdminDashboard from "./Dashboard/AdminDashboard";
import IndustrialDashboard from "./Dashboard/IndustrialDashboard";

function App() {
  return (
    <>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />

              {/* resistration routes */}
              <Route path="/StudentRegister" element={<StudentForm/>} />   
              <Route path="/IndustrialRegister" element={<IndustrialForm/>} />
              <Route path="/adminResister" element={<AdminForm/>} />

             {/* dashbord routes */}
              <Route path="/student" element={<StudentDashboard />}/>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/industrialowner" element={<IndustrialDashboard/>} />

            </Routes>
          </>
  );
}

export default App;
