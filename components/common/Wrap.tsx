import {LeftNvgBar, TopGlobalNvgBar} from './index';

import React from 'react';

interface WrapProps {
  children: React.ReactNode;
}
const Wrap = ({children}: WrapProps) => (
  <div id="wrap">
    <TopGlobalNvgBar />
    <LeftNvgBar />
    <input
      value="12321"
      onChange={() => {
        console.log('!!');
      }}
    />
    {children}
  </div>
);

export default Wrap;
