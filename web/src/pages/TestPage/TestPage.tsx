import * as React from 'react';
import { Manager, Reference, Popper } from 'react-popper';

const Example = () => (
  <Manager>
    <Reference>
      {({ ref }) => (
        <button type="button" ref={ref}>
          Reference element
        </button>
      )}
    </Reference>
    <Popper placement="top">
      {({ ref, style, placement, arrowProps }) => (
        <div ref={ref} style={style} data-placement={placement}>
          Popper element
          <div ref={arrowProps.ref} style={arrowProps.style} />
        </div>
      )}
    </Popper>
  </Manager>
);

import { nil, notNil } from '../../libraries/fns';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './TestPage.css';
import { cascadeOrElse } from '../../libraries/cascade';

interface TestPageProps {}

const passwordCompare = (message: string = 'Passwords Must Match') => {
  let currentPassword: string | undefined = undefined;
  const password = (v: string) => {
    currentPassword = v;
    return undefined;
  };
  const confirmPassword = (v: string) =>
    cascadeOrElse<string | undefined>(
      undefined,
      [nil(v), undefined],
      [nil(currentPassword), undefined],
      [v !== currentPassword, message]
    );
  return [password, confirmPassword];
};

/**
 * @render react
 * @name TestPage
 * @example
 * <TestPage label="Hello World" />
 */
const TestPage: React.SFC<TestPageProps> = () => {
  const maxLength = (n: number, m: string = 'Too Long!') => (v: string) => (v.length > n ? m : undefined);
  const [password, confirmPassword] = passwordCompare();

  const shared = {
    validators: [maxLength(7)],
    handleInvalid: (v?: string) => console.log(nil(v) ? 'Goot' : `Bat : ${v}`),
    disabled: false,
  };
  const options = [
    { label: 'One', value: 'one', default: true },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ];

  return (
    <article className="page-test">
      <header className="page-test-header">
        <h1 className="ma-0 pa-0 pl-5 cfr-primary">Header 1</h1>
        <p className="ma-0 pa-0 pl-5 cfr-secondary">This is a subtitle</p>
      </header>
      <section className="test-grid pa-4">
        <Input
          label="Password"
          className="gs-2"
          type="password"
          classes={{ theme: 'ct-base' }}
          validators={[password]}
        />
        <Input
          label="Confirm Password"
          className="gs-2"
          type="password"
          classes={{ theme: 'ctr-base' }}
          validators={[confirmPassword]}
        />
        <Input label="Primary" classes={{ theme: 'ct-primary' }} {...shared} />
        <Input label="Secondary" classes={{ theme: 'ct-secondary' }} {...shared} />
        <Input label="Accent" classes={{ theme: 'ct-accent', focused: 'ctr-accent' }} {...shared} />
        <Input label="Light" classes={{ theme: 'ct-light' }} {...shared} />
        <Input label="Dark" classes={{ theme: 'ct-dark' }} {...shared} />
        <Input label="Info" classes={{ theme: 'ct-info ' }} {...shared} />
        <Input label="Warning" classes={{ theme: 'ct-warning' }} {...shared} />
        <Input label="Error" classes={{ theme: 'ct-error' }} {...shared} />
        <Input label="Primary Reverse" classes={{ theme: 'ctr-primary' }} {...shared} />
        <Input label="Secondary Reverse" classes={{ theme: 'ctr-secondary' }} {...shared} />
        <Input label="Accent Reverse" classes={{ theme: 'ctr-accent' }} {...shared} />
        <Input label="Light Reverse" classes={{ theme: 'ctr-light' }} {...shared} />
        <Input label="Dark Reverse" classes={{ theme: 'ctr-dark' }} {...shared} />
        <Input label="Info Reverse" classes={{ theme: 'ctr-info ' }} {...shared} />
        <Input label="Warning Reverse" classes={{ theme: 'ctr-warning' }} {...shared} />
        <Input label="Error Reverse" classes={{ theme: 'ctr-error' }} {...shared} />
      </section>
    </article>
  );
};

export default TestPage;
