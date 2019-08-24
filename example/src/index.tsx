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
          <TabBarLink to="/" key="0">
            <HelpCircle />
            <span>About</span>
          </TabBarLink>
          <TabBarLink to="/usage" key="1">
            <Code />
            <span>Usage</span>
          </TabBarLink>
          <TabBarLink to="/credits" key="2">
            <Info />
            <span>Credits</span>
          </TabBarLink>
        </>
      }
      paths={["/", "/usage", "/credits"]}
    >
      <About />
      <Usage />
      <Credits />
    </ResponsiveReactApp>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
