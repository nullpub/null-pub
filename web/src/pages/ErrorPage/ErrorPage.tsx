import * as React from 'react';

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
    <h1 className="ct-error">Error</h1>
  </article>
);

export default ErrorPage;
