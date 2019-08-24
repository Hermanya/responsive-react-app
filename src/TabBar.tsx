import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TabBarLink = styled(Link)`
  border-radius: 2px;
  font-size: 0.70711rem;
  flex-shrink: 0;
  line-height: 1;
  width: 64px;
  padding: 0.2625rem 0.2625rem 0;
  text-decoration: none;
  text-align: center;
  background: none;
  border: 0;
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
    color: #a0a0a0;
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
