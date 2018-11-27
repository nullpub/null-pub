import * as React from 'react';

import { Input } from '../../components/Forms';

import './TestPage.css';
import { eventValueFactory } from '../../libraries/eventValue';

export interface TestPageProps {}

/**
 * @render react
 * @name TestPage
 * @example
 * <TestPage label="Hello World" />
 */
export const TestPage: React.SFC<TestPageProps> = () => {
  const onChange = eventValueFactory(v => console.log('Hello', v));
  return (
    <article className="page-test fd-column fg-4">
      <section className="page-test-form flex-sm-c2r fg-4">
        <Input label="Email" type="email" onChange={onChange} />
        <Input className="tcr-info" label="Password" type="password" onChange={onChange} />
      </section>
      <section className="page-test-form flex-sm-c2r fg-4">
        <Input className="tc-warning" label="Email" type="email" onChange={onChange} hint="Some Error!" />
        <Input className="tc-info" label="Password" type="password" onChange={onChange} />
      </section>
      <section className="page-test-form flex-sm-c2r fg-4">
        <Input className="tc-primary" label="Email" type="email" onChange={onChange} />
        <Input className="tcr-primary" label="Password" type="password" onChange={onChange} />
      </section>
    </article>
  );
};
