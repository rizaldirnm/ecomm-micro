import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// @ Mount function to start up the app
const mount = (element) => {
  ReactDOM.render(<App />, element);
};

// @ If we are in dev and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// @ We are running through container
// and we should export the mount function

export { mount };
