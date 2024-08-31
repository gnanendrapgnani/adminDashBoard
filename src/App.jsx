import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scencs/global/TopBar";
import SideBar from "./scencs/global/SideBar";
import DashBoard from "./scencs/dashboard";
import Team from "./scencs/team";
import Invoices from "./scencs/invoices";
import Contacts from "./scencs/contacts";
// import Bar from "./scencs/bar";
// import Form from "./scencs/form";
// import Line from "./scencs/line";
// import Pie from "./scencs/pie";
// import FAQ from "./scencs/faq";
// import Geograpy from "./scencs/geograpy";
// import Calendar from "./scencs/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="contant">
            <TopBar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geograpy" element={<Geograpy />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
