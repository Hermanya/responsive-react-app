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
  align-items: center;
  justify-content: center;
\`

const App = () =>
  <ResponsiveReactApp
    tabs={<>
      <Tab to="/">Page 1</Tab>
      <Tab to="/2">Page 2</Tab>
      <Tab to="/3">Page 3</Tab>
      <Tab to="/4">Page 4</Tab>
    </>}
    paths={[
      '/', '/2', '/3', '/4'
    ]}
  >
    <div>Page 1</div>
    <div>Page 2</div>
    <div>Maybe Page 3</div>
    <div>And Maybe Page 4</div>
  </ResponsiveReactApp>
`;

function Usage() {
  return (
    <div css="padding: 32px;">
      <h2>Usage</h2>
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
