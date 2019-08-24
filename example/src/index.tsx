import * as React from "react";
import "react-app-polyfill/ie11";
import * as ReactDOM from "react-dom";
import { Code, HelpCircle, Info } from "react-feather";
import ResponsiveReactApp, { TabBarLink } from "responsive-react-app";
import "./index.css";
import Usage from "./components/usage";
import About from "./components/about";
import Credits from "./components/credits";
import * as _ from "styled-components/cssprop"; // eslint-disable-line

const App = () => {
  return (
    <ResponsiveReactApp
      tabs={
        <>
          <TabBarLink to="/">
            <HelpCircle />
            <span>About</span>
          </TabBarLink>
          <TabBarLink to="/usage">
            <Code />
            <span>Usage</span>
          </TabBarLink>
          <TabBarLink to="/credits">
            <Info />
            <span>Credits</span>
          </TabBarLink>
        </>
      }
      paths={["/", "/usage", "/credits"]}
      routerProps={{ basename: process.env.PUBLIC_URL }}
    >
      <About />
      <Usage />
      <Credits />
    </ResponsiveReactApp>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
