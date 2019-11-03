import React from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Text,
  Icon,
} from '@blueprintjs/core';
import styled from 'styled-components';
import {path} from 'ramda';
import {
fontSize, system, space
} from 'styled-system';
import useWindowSize from '@rehooks/window-size';

const Brand = styled.img.attrs({src: require('../../../assets/dig_logo_white.png')})`
  object-fit: cover;
  height: 3.5em;
  cursor: pointer;
  margin-left: 5%;
`;

const StyledNavbar = styled(Navbar)`
  background-color: ${path(['theme', 'colors', 'primary'])};
  height: 100;
`;

const StyledNavbarGroup = styled(NavbarGroup)`
  height: 100;
  width: ${props => props.width};
  padding-right: 10;
  justify-content: ${props => props.justifycontent};
`;

const StyledNavbarHeading = styled(NavbarHeading)`
  ${fontSize}
`;

const StyledIcon = styled(Icon).attrs( (props) => ({iconSize: props.large ? 25 : 20}))`
 color: #ffffff;
 ${space};
`;
 
const StyledButton = styled.button.attrs(() => ({ml: [1, 3, 5]}))`
 background-color: Transparent;
 cursor: pointer;
 border: none;
 padding: 10;
 ${space};
`;

const StyledText = styled(Text)`
  color: #ffffff;;
  ${fontSize};
  text-align: left;
  ${system({
    display: {
      property: 'display',
      scale: 'displays'
    }
  })};
  font-weight: 900;
`;

const NavItem = ({handler, icon}) => {
  const {innerWidth} = useWindowSize();
  const large = innerWidth > 600 ? 1 : 0;
  return(
    <StyledButton>
      <StyledIcon icon={icon} onClick={handler} large={large} />
    </StyledButton>
  );
};

const NavbarMenu = styled.div`
margin-left: auto;
display: flex;
`;

export const Component = () => {
  const buttons = [
   
    {
    id: 'search',
    icon: 'search',
    handler: () => {},
   },
   {
    id: 'wishlist',
    icon: 'heart',
    handler: () => {},
   },
   {
    id: 'cart',
    icon: 'shopping-cart',
    handler: () => {},
   },
  ];
  return (
    <StyledNavbar>
      <StyledNavbarGroup align="left" width="30%">
        <StyledNavbarHeading fontSize={[0, 3, 6]}>
          <Brand />
        </StyledNavbarHeading>
      </StyledNavbarGroup>
      <StyledNavbarGroup
        align="right"
        width="70%"
      >
        <StyledText fontSize={[3, 4, 6]}>
         Digital Insurance Group Awesome Store
        </StyledText>
        <NavbarMenu>
          {buttons.map(button => (
            <NavItem
              {...button}
              key={button.id}
            />
            ))}
        </NavbarMenu>
      </StyledNavbarGroup>
    </StyledNavbar>
  );
};


export default Component;
