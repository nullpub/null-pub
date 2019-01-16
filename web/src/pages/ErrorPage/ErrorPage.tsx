import * as React from 'react';

import { history } from '../../libraries/history';

import './ErrorPage.css';

export interface ErrorPageProps {}

/**
 * @render react
 * @name ErrorPage
 * @example
 * <ErrorPage label="Hello World" />
 */
export const ErrorPage: React.SFC<ErrorPageProps> = () => (
  <article className="page-error">
    <h1 className="ct-error ctr-error-hover ba-1 px-5 py-3 mtm-25p" onClick={() => history.push('/')}>
      Oops! An Error!
    </h1>
  </article>
);

export default ErrorPage;
