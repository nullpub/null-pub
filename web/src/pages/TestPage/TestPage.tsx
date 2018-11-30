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
      <h1 className="fsu-5 ma-0 pa-0 pl-5">Header 1</h1>
      <h2 className="fsu-4 ma-0 pa-0 pl-5">Header 2</h2>
      <h3 className="fsu-3 ma-0 pa-0 pl-5">Header 3</h3>
      <h4 className="fsu-2 ma-0 pa-0 pl-5">Header 4</h4>
      <h5 className="fsu-1 ma-0 pa-0 pl-5">Header 5</h5>
      <h6 className="fsu-0 ma-0 pa-0 pl-5">Header 6</h6>
      <section className="test-grid pa-4">
        <Input label="Base" className="gs-2" classes={{ theme: 'ct-base' }} {...shared} />
        <Input label="Base Reverse" className="gs-2" classes={{ theme: 'ctr-base' }} {...shared} />
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
