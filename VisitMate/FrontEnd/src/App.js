import Header from "./Components/Header";
import Login from "./Components/Login";
import { Routes, Route} from "react-router-dom"
import TeacherRegister from "./Components/TeacherRegister";
import StudentForm from "./ResistrationForm/StudentForm";
import IndustrialForm from "./ResistrationForm/IndustrialForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDashbosr from "./Dashboard/StudentDashbosr";
import AdminForm from "./ResistrationForm/AdminForm";

function App() {
  return (
    <>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/StudentRegister" element={<StudentForm/>} />   
              <Route path="/admin" element={<AdminForm/>} />
              <Route path="/student" element={<StudentDashbosr />} />
              <Route path="/IndustrialRegister" element={<IndustrialForm/>} />
            </Routes>
          </>
  );
}

export default App;
