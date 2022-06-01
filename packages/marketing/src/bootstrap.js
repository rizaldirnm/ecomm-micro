import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

// @ Mount function to start up the app
const mount = (element, { onNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    // listen changes of history on marketing app
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, element);
};

// @ If we are in dev and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, {});
  }
}

// @ We are running through container
// and we should export the mount function

export { mount };
