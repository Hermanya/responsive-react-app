import * as React from "react";
import styled from "styled-components/macro";

const Avatar = styled.img`
  float: left;
  margin-right: 1em;
  border-radius: 8px;
`;

const Dependencies = styled.ol`
  li {
    line-height: 2;
  }
`;

function Credits() {
  return (
    <div css="padding: 32px;">
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

      <div
        css={`
          display: grid;
          grid-template: "pic name" auto "pic link" auto / auto 1fr;
          grid-gap: 5px;
        `}
      >
        <Avatar
          src="https://avatars3.githubusercontent.com/u/2906365?s=100"
          width="50"
          css="grid-area: pic;"
        />
        <strong
          css={`
            grid-area: name;
            font-size: 20px;
            font-weight: normal;
          `}
        >
          Herman Starikov
        </strong>
        <a href="https://starikov.dev" css="grid-area:link">
          starikov.dev
        </a>
      </div>
    </div>
  );
}
export default Credits;
