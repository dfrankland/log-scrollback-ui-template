import * as React from "react";
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default dynamic(() => Promise.resolve(App), {
  ssr: false
});
