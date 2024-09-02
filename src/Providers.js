import React from "react";
import App from "./App";
import { ResetCSS } from "./global/ResetCSS";
import { GlobalCSS } from "./global/GlobalCSS";
import GithubProvider from "./providers/github-provider";

const Providers = () => {
  return (
    <GithubProvider>
      <ResetCSS />
      <GlobalCSS />
      <App />
    </GithubProvider>
  );
};

export default Providers;