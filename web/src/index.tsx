import * as React from "react";
import { render } from "react-dom";
import { Location } from "history";
import find from "lodash-es/find";

import "./styles/main.css";

import { history } from "./libraries/history";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const container = document.getElementById("app");

const routes = [{ path: "/", action: () => <HomePage title="nll.sh" /> }];

const r = (l: Location<any>) => {
  const page = find(routes, r => r.path === l.pathname);

  if (page !== undefined) {
    return render(page.action(), container);
  }
  return render(<ErrorPage />, container);
};

r(history.location); // render the current URL
history.listen(r);
