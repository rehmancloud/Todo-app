import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import App from "./App";
import "./index.css";

Amplify.configure(awsExports);
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
