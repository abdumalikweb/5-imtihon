import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Login, Register } from "./Pages/front";

import { TOKEN,  } from "./const";
import AdminLayout from "./Components/Layout/admin";
import { ROLE } from "./utils";
import { adminRoutes } from "./const/menu";

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
 
  const isAuthorized = localStorage.getItem(TOKEN)&& ROLE !=="user";
  return (
    <Router>
      <Routes>
        {frontroutes.map(({ url, page: Page }) => (
          <Route path={"/" + url} key={url} element={<Page />}></Route>
        ))}
      </Routes>
      <Routes>
        {isAuthorized &&
          adminRoutes.map(({ url, page: Page }) => (
            <Route
              path={"/" + url}
              key={url}
              element={
                <AdminLayout>
                  <Page />
                </AdminLayout>
              }
            />
          ))}
      </Routes>
    </Router>
  );
}

export default App;
