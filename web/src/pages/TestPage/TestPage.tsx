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

import { nil } from '../../libraries/fns';
import Input from '../../components/Input';
import Select from '../../components/Select';

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
  // const minLength = (n: number, m: string = 'Too Short!') => (v: string) => (v.length < n ? m : undefined);
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
      <section className="test-grid pa-4">
        <Input label="Base" className="gs-2" classes={{ theme: 'tc-base' }} {...shared} />
        <Input label="Base Reverse" className="gs-2" classes={{ theme: 'tcr-base' }} {...shared} />
        <Input label="Primary" classes={{ theme: 'tc-primary' }} {...shared} />
        <Input label="Secondary" classes={{ theme: 'tc-secondary' }} {...shared} />
        <Input label="Accent" classes={{ theme: 'tc-accent', focused: 'tcr-accent' }} {...shared} />
        <Input label="Light" classes={{ theme: 'tc-light' }} {...shared} />
        <Input label="Dark" classes={{ theme: 'tc-dark' }} {...shared} />
        <Input label="Info" classes={{ theme: 'tc-info ' }} {...shared} />
        <Input label="Warning" classes={{ theme: 'tc-warning' }} {...shared} />
        <Input label="Error" classes={{ theme: 'tc-error' }} {...shared} />
        <Input label="Primary Reverse" classes={{ theme: 'tcr-primary' }} {...shared} />
        <Input label="Secondary Reverse" classes={{ theme: 'tcr-secondary' }} {...shared} />
        <Input label="Accent Reverse" classes={{ theme: 'tcr-accent' }} {...shared} />
        <Input label="Light Reverse" classes={{ theme: 'tcr-light' }} {...shared} />
        <Input label="Dark Reverse" classes={{ theme: 'tcr-dark' }} {...shared} />
        <Input label="Info Reverse" classes={{ theme: 'tcr-info ' }} {...shared} />
        <Input label="Warning Reverse" classes={{ theme: 'tcr-warning' }} {...shared} />
        <Input label="Error Reverse" classes={{ theme: 'tcr-error' }} {...shared} />
      </section>
    </article>
  );
};

export default TestPage;
