import * as React from 'react';

const codeExample = `
import ResponsiveReactApp 
  from 'react-responsive-app';
import { Link }
  from 'react-router-dom'

const App = () =>
  <ResponsiveReactApp
    tabs={<>
      <Link to="/">Page 1</Link>
      <Link to="/2">Page 2</Link>
      <Link to="/3">Page 3</Link>
      <Link to="/4">Page 4</Link>
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
    <div>
      <h2>Usage</h2>
      <p>Install the package:</p>
      <code>npm install responsive-react-app</code>
      <p>Add this code:</p>
      <pre>
        <code>{codeExample}</code>
      </pre>
      <p>Number of pages may vary from 1 to 4.</p>
    </div>
  );
}

export default Usage;
