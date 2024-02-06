import Header from "./Components/Header";
import Login from "./Components/Login";
import { Routes, Route} from "react-router-dom"
import StudentRegister from "./Components/StudentRegister";
import TeacherRegister from "./Components/TeacherRegister";
import IndustrialRegister from "./Components/IndustrialRegister";

function App() {
  return (
    <>
            <Header />

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/StudentRegister" element={<StudentRegister/>} />
              <Route path="/TeacherRegister" element={<TeacherRegister/>} />
              <Route path="/IndustrialRegister" element={<IndustrialRegister/>} />
            </Routes>
          </>
  );
}

export default App;
