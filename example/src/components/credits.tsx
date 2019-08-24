import * as React from "react";
import styled from "styled-components";

const Avatar = styled.img`
  float: left;
  margin-right: 1em;
`;

const Dependencies = styled.ol`
  li {
    line-height: 2;
  }
`;

function Credits() {
  return (
    <div>
      <h2>Credits</h2>

      <p>
        License: <strong>MIT</strong>
      </p>

      <p>Dependencies:</p>
      <Dependencies>
        <li>
          react <em>>=16</em>
        </li>
        <li>
          react-router-dom <em>>=5</em>
        </li>
        <li>
          styled-components <em>>=4</em>
        </li>
      </Dependencies>

      <p>Made by:</p>
      <Avatar
        src="https://avatars3.githubusercontent.com/u/2906365?s=100"
        width="50"
      />
      <p>
        <strong>Herman Starikov</strong>
      </p>
      <a href="https://starikov.dev">starikov.dev</a>
    </div>
  );
}
export default Credits;
