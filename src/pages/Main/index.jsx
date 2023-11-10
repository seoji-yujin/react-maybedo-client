import React, { useState } from 'react';
import Layout from 'layouts/Layout';
import {
  MenuButton,
  MenuList,
  MenuItemLabel,
  MenuItemButton,
  MenuItemWrapper,
} from './style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiTodoFill } from 'react-icons/ri';
import { MdGroup } from 'react-icons/md';
import { Outlet, useNavigate } from 'react-router-dom';

function Main() {
  const menus = [
    // { label: 'CALENDAR', component: <div />, icon:<div /> },
    { label: 'TODO', route: '/main', icon: <RiTodoFill /> },
    { label: 'GROUP', route: '/main/group', icon: <MdGroup /> },
  ];
  const [hovering, setHovering] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <Outlet />
      <MenuList
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
      >
        {menus.map((menu, i) => (
          <MenuItemWrapper key={i}>
            <MenuItemLabel>{hovering && menu.label}</MenuItemLabel>
            <MenuItemButton
              show={hovering}
              onClick={() => {
                navigate(menu.route);
                setHovering(false);
              }}
            >
              {menu.icon}
            </MenuItemButton>
          </MenuItemWrapper>
        ))}{' '}
        <MenuItemWrapper>
          <MenuButton
            hovering={hovering}
            onClick={() => {
              setHovering((prev) => !prev);
            }}
          >
            <GiHamburgerMenu />
          </MenuButton>
        </MenuItemWrapper>
      </MenuList>
    </Layout>
  );
}

export default Main;
