import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TabBarLink = styled(Link)`
  width: 64px;
  font-size: 0.7rem;
  padding: 0.25rem 0.25rem 0;
  text-decoration: none;
  text-align: center;
  svg {
    display: block;
    height: 32px;
    margin: 0 auto;
  }
`;

export const TabBarContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  right: 0;
  z-index: 3;
  min-height: 3.5rem;
  padding-bottom: env(safe-area-inset-bottom);
  backdrop-filter: saturate(180%) blur(2px);
  background-color: rgba(255, 255, 255, 0.7);
  @media (prefers-color-scheme: dark) {
    background: rgba(0, 0, 0, 0.3);
    a {
      color: #fff;
    }
  }

  width: 100vw;
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 2}px) {
    width: 50vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 3}px) {
    width: 33.333333vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 4}px) {
    width: 25vw;
  }
`;

export const Active = styled.div`
  display: flex;
  a,
  a:hover {
    opacity: 0.5;
  }
`;

const TabBar: React.FC<{
  children: any[];
  compnentsPerScreen: number;
  paths: string[];
}> = ({ children, compnentsPerScreen, paths }) => {
  const index = Math.min(
    paths.indexOf(window.location.pathname),
    children.length - compnentsPerScreen
  );
  return (
    <TabBarContainer>
      {children.slice(0, index)}
      {children.slice(index, index + compnentsPerScreen).map((child, index) => (
        <Active key={`sublist-${index}`}>{child}</Active>
      ))}
      {children.slice(index + compnentsPerScreen)}
    </TabBarContainer>
  );
};

export default TabBar;
