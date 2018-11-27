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
  const shared = { validators: [maxLength(1)] };

  return (
    <article className="page-test">
      <div className="fd-column fg-4 pa-4">
        <div className="flex-sm-c2r fg-4">
          <Input label="Primary" classes={{ theme: 'tc-primary' }} {...shared} />
          <Input label="Secondary" classes={{ theme: 'tc-secondary' }} {...shared} />
          <Input label="Accent" classes={{ theme: 'tc-accent' }} {...shared} />
          <Input label="Light" classes={{ theme: 'tc-light' }} {...shared} />
          <Input label="Dark" classes={{ theme: 'tc-dark' }} {...shared} />
          <Input label="Info" classes={{ theme: 'tc-info ' }} {...shared} />
          <Input label="Warning" classes={{ theme: 'tc-warning' }} {...shared} />
          <Input label="Error" classes={{ theme: 'tc-error' }} {...shared} />
        </div>
        <div className="flex-sm-c2r fg-4">
          <Input label="Primary Reverse" classes={{ theme: 'tcr-primary' }} {...shared} />
          <Input label="Secondary Reverse" classes={{ theme: 'tcr-secondary' }} {...shared} />
          <Input label="Accent Reverse" classes={{ theme: 'tcr-accent' }} {...shared} />
          <Input label="Light Reverse" classes={{ theme: 'tcr-light' }} {...shared} />
          <Input label="Dark Reverse" classes={{ theme: 'tcr-dark' }} {...shared} />
          <Input label="Info Reverse" classes={{ theme: 'tcr-info ' }} {...shared} />
          <Input label="Warning Reverse" classes={{ theme: 'tcr-warning' }} {...shared} />
          <Input label="Error Reverse" classes={{ theme: 'tcr-error' }} {...shared} />
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
