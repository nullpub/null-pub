import * as React from 'react';

// import Input from '../../components/Input';

import './TestPage.css';

interface TestPageProps {}

const FontTest: React.SFC<{ size: string }> = ({ size }) => (
  <header className={`${size} fld-column`}>
    <p>{size}</p>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
    <p>p</p>
  </header>
);

const CircleTest: React.SFC<{ size: string; bigTheme: string; smallTheme: string }> = ({
  size,
  bigTheme,
  smallTheme,
}) => {
  return (
    <div
      className="fld-row fwu-2"
      style={{
        width: `${size}`,
        height: `${size}`,
        minWidth: `${size}`,
        minHeight: `${size}`,
        fontSize: `calc(${size} / 2)`,
        position: 'relative',
        marginTop: `calc(${size} * 0.08)`,
        marginRight: `calc(${size} * 0.08)`,
      }}
    >
      <div className={`${bigTheme} fsu-2 bra-c fls-1-1 flai-center fljc-center`} style={{ display: 'grid' }}>
        H
      </div>
      <div
        className={`${smallTheme} fsd-5 fw-0 flai-center fljc-center bwa-2 bra-c`}
        style={{ display: 'grid', position: 'absolute', top: '-8%', right: '-8%', width: '40%', height: '40%' }}
      >
        {size}
      </div>
    </div>
  );
};
/**
 * @render react
 * @name TestPage
 * @example
 * <TestPage label="Hello World" />
 */
const TestPage: React.SFC<TestPageProps> = () => {
  return (
    <article className="page-test pa-5 fld-column flg-4">
      <section className="fld-row flg-6 fljc-space-between bwa-1 bra-1 pa-4 ctr-primary doa-auto">
        {[5, 4, 3, 2, 1].map(x => (
          <FontTest key={`fsd-${x}`} size={`fsd-${x}`} />
        ))}
        <FontTest key="fs-0" size="fs-0" />
        {[1, 2, 3, 4, 5].map(x => (
          <FontTest key={`fsu-${x}`} size={`fsu-${x}`} />
        ))}
      </section>
      <section className="fld-row flg-6 fljc-space-between bwa-1 bra-1 pa-4 ctr-primary doa-auto">
        {[50, 100, 150, 200, 250, 300].map(s => (
          <CircleTest size={`${s}px`} bigTheme="ct-warning" smallTheme="ctr-warning" />
        ))}
      </section>
    </article>
  );
};

export default TestPage;
