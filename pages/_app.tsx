import '~/styles/globals.css';

import type {AppProps} from 'next/app';
import {Wrap} from '~/components/common';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Wrap>
      <Component {...pageProps} />
    </Wrap>
  );
}
