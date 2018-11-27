import * as React from 'react';

import Input from '../../components/Input';

import './TestPage.css';

interface TestPageProps {}

/**
 * @render react
 * @name TestPage
 * @example
 * <TestPage label="Hello World" />
 */
const TestPage: React.SFC<TestPageProps> = () => {
  const maxLength = (n: number, m: string = 'Too Long!') => (v: string) => (v.length > n ? m : undefined);

  return (
    <article className="page-test">
      <div className="fd-column fg-4 pa-4">
        <div className="flex-sm-c2r fg-4">
          <Input label="Primary" className="fb-min-content" classes={{ theme: 'tc-primary' }} />
          <Input label="Secondary" className="fb-min-content" classes={{ theme: 'tc-secondary' }} />
          <Input label="Accent" className="fb-min-content" classes={{ theme: 'tc-accent' }} />
          <Input label="Light" className="fb-min-content" classes={{ theme: 'tc-light' }} />
          <Input label="Dark" className="fb-min-content" classes={{ theme: 'tc-dark' }} />
          <Input label="Info" className="fb-min-content" classes={{ theme: 'tc-info ' }} validators={[maxLength(1)]} />
          <Input label="Warning" className="fb-min-content" classes={{ theme: 'tc-warning' }} />
          <Input label="Error" className="fb-min-content" classes={{ theme: 'tc-error' }} />
        </div>
        <div className="flex-sm-c2r fg-4">
          <Input label="Primary Reverse" classes={{ theme: 'tcr-primary' }} />
          <Input label="Secondary Reverse" classes={{ theme: 'tcr-secondary' }} />
          <Input label="Accent Reverse" classes={{ theme: 'tcr-accent' }} />
          <Input label="Light Reverse" classes={{ theme: 'tcr-light' }} />
          <Input label="Dark Reverse" classes={{ theme: 'tcr-dark' }} />
          <Input label="Info Reverse" classes={{ theme: 'tcr-info ' }} />
          <Input label="Warning Reverse" classes={{ theme: 'tcr-warning' }} />
          <Input label="Error Reverse" classes={{ theme: 'tcr-error' }} />
        </div>
        <div className="flex-md-c2r fg-4">
          <Input label="Email" />
          <Input label="Password" />
        </div>
        <div className="flex-lg-c2r fg-4">
          <Input label="Email" />
          <Input label="Password" />
        </div>
      </div>
    </article>
  );
};

export default TestPage;
