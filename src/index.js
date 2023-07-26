import App from "./App";
import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,

  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode>{<App />}</React.StrictMode>);
