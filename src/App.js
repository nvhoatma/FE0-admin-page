// src/App.js
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
