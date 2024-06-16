import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import axios from "axios";
import { useEffect } from "react";
import Courses from "./components/Courses";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [error, setError] = useState(null);
  const [res, setRes] = useState([]);
  const [mentor, setMentor] = useState(null);
  const studentId = 2;


  useEffect(() => {
    const fetchStudentDetails = async () => {
      axios
        .get(
          "http://192.168.43.21:3000/student/2", //proxy uri
          {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin' : '*'
            },
          }
        )
        .then(function (response) {

          // console.log(response.data[0].attendance);
          setRes(response.data[0]);
        });
    };

    fetchStudentDetails();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} props={res}/>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dashboard" element={<Dashboard props={res}/>} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie props={res.attendance}/>} />
              <Route path="/line" element={<Bar/>} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/courses" element={<Courses />} /> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
