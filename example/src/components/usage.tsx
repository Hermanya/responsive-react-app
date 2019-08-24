import * as React from "react";
import "styled-components/macro";

const codeExample = `
import ResponsiveReactApp 
  from 'react-responsive-app';
import styled
  from 'styled-components'
import { Link }
  from 'react-router-dom'

const Page = styled.div\`
  padding: 32px;
\`

const Tab = styled(Link)\`
  text-decoration: none;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
\`

const Icon = styled.div\`
  font-size: 24px;
\`;

const App = () =>
  <ResponsiveReactApp
    tabs={<>
      <Tab to="/">Page 1</Tab>
      <Tab to="/2">Page 2</Tab>
      <Tab to="/3">Page 3</Tab>
      <Tab to="/4">
        <Icon>🤟</Icon>
        Page 4
      </Tab>
    </>}
    paths={[
      '/', '/2', '/3', '/4'
    ]}
  >
    <Page>Page 1</Page>
    <Page>Page 2</Page>
    <Page>Maybe Page 3</Page>
    <Page>And Maybe Page 4</Page>
  </ResponsiveReactApp>
`;

function Usage() {
  return (
    <div css="padding: 32px;">
      <h2>Usage</h2>
      <p>
        I put together an example on{" "}
        <a href="https://codesandbox.io/s/basic-react-responsive-app-fybj1">
          CodeSendbox
        </a>
        .
      </p>
      <p>Install the package:</p>
      <code>
        <strong>npm install responsive-react-app</strong> react react-router-dom
        styled-components
      </code>
      <p>Add this code:</p>
      <pre>
        <code>{codeExample}</code>
      </pre>
      <p>Number of pages may vary from 1 to 4.</p>
    </div>
  );
}

export default Usage;
