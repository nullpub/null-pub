import * as React from 'react';
import * from './polyfills';
import { render } from 'react-dom';
import { Location } from 'history';
import { find } from 'lodash';

import { history } from './libraries/history';

import { HomePage } from './pages/HomePage';
import TestPage from './pages/TestPage';
import { ErrorPage } from './pages/ErrorPage';

const container = document.getElementById('app');

const routes = [
  { path: '/', action: () => <HomePage title="null.pub" /> },
  { path: '/test', action: () => <TestPage /> },
];

const r = (l: Location<any>) => {
  const page = find(routes, r => r.path === l.pathname);

  if (page !== undefined) {
    return render(page.action(), container);
  }
  return render(<ErrorPage />, container);
};

r(history.location); // render the current URL
history.listen(r);
