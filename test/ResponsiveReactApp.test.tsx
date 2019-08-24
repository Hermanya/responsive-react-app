import * as React from "react";
import * as ReactDOM from "react-dom";
import ResponsiveReactApp from "../src";
import { Link } from "react-router-dom";

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ResponsiveReactApp
        tabs={
          <>
            <Link to="/">Page 1</Link>
            <Link to="/2">Page 2</Link>
            <Link to="/3">Page 3</Link>
            <Link to="/4">Page 4</Link>
          </>
        }
        paths={["/", "/2", "/3", "/4"]}
      >
        <div>Page 1</div>
        <div>Page 2</div>
        <div>Maybe Page 3</div>
        <div>And Maybe Page 4</div>
      </ResponsiveReactApp>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
