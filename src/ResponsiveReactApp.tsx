import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import useWindowSize from "./hooks/useWindowSize";
import TabBar from "./TabBar";

const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
const Board = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  transition: transform 0.25s;
  transition-timing-function: ease-in-out;
`;
const Mobile = styled.div`
  padding: 20px;
  padding-bottom: 54px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 2}px) {
    width: 50vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 3}px) {
    width: 33.333333vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 4}px) {
    width: 25vw;
  }
  /* padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px); */
`;

const ResponsiveReactApp: React.FC<{
  children: any[];
  tabs: any;
  paths: string[];
  minimumTabSize?: number;
}> = ({ children, tabs, minimumTabSize = 320, paths }) => {
  const size = useWindowSize();
  const compnentsPerScreen = (size.width / minimumTabSize) | 0;
  const childSize = size.width / compnentsPerScreen;
  return (
    <ThemeProvider
      theme={{
        minimumTabSize
      }}
    >
      <Router>
        <ViewPort>
          <Switch>
            {children.map((_, index) => (
              <Route
                exact
                path={`${paths[index] || index || ""}`}
                render={() => (
                  <>
                    <Board
                      style={{
                        transform: `translateX(-${childSize *
                          Math.min(
                            index,
                            children.length - compnentsPerScreen
                          )}px)`
                      }}
                    >
                      {React.Children.map(children, (child, index) => {
                        return <Mobile key={index}>{child}</Mobile>;
                      })}
                    </Board>
                    {compnentsPerScreen < children.length && (
                      <TabBar
                        compnentsPerScreen={compnentsPerScreen}
                        paths={paths}
                      >
                        {tabs.props.children.slice(0)}
                      </TabBar>
                    )}
                  </>
                )}
              />
            ))}
          </Switch>
        </ViewPort>
      </Router>
    </ThemeProvider>
  );
};

ResponsiveReactApp.defaultProps = {
  children: [],
  paths: []
};

export default ResponsiveReactApp;
