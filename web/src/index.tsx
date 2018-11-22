import * as React from 'react';
import { render } from 'react-dom';

import { Home } from './pages/Home';

const App: React.SFC = () => {
  return <Home title="null.pub" />;
};

const container = document.getElementById('app');

render(<App />, container);
