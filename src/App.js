import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Dashboard,
  Experiences,
  Messege,
  Portfolios,
  Skills,
} from "./Pages/admin";
import {  Login, Register } from "./Pages/front";

import { TOKEN } from "./const";

function App() {
  const frontroutes = [
    
    {
      url: "",
      page: Login,
    },
    {
      url: "registr",
      page: Register,
    },
  ];
  const adminroutes = [
    {
      url: "dashboard",
      page: Dashboard,
    },
    {
      url: "experiences",
      page: Experiences,
    },
    {
      url: "message",
      page: Messege,
    },
    {
      url: "portfolio",
      page: Portfolios,
    },
    {
      url: "skills",
      page: Skills,
    },
  ];
  const token = localStorage.getItem(TOKEN);
  return (
    <Router>
      <Routes>
        {frontroutes.map(({ url, page: Page }) => (
          <Route
            path={"/" + url}
            key={url}
            element={
            
                <Page />
            
            }
          ></Route>
        ))}
      </Routes>
      <Routes>
        {token && adminroutes.map(({ url, page: Page }) => (
          <Route
            path={"/" + url}
            key={url}
            element={
            
                <Page />
              
            }
          />
        ))}
      </Routes>
    </Router>
  );
}


export default App;
