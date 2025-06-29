import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-x5zh3gpfnerk.frontegg.com",
  clientId: "7d59c9ae-0cd0-43b0-ad17-c8cc0731dbe0",
  appId: "051420a5-79bd-4338-a3c1-2c22f626a398",
};

const authOptions = {
  keepSessionAlive: true, // Uncomment this in order to maintain the session alive
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // only pass it here

root.render(
  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App />
  </FronteggProvider>
);
