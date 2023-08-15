'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import hideMenuAfterClick from '@/handleClick/hideMenuAfterClick';

const Menu = dynamic(() => import('./menu'));

export default function NavigationBar() {
  useEffect(() => {
    /*<MenuIcon/>*/
    const menuButton = document.querySelector('[data-testid~="MenuIcon"]')!;
    bindMenu(menuButton);
  }, []);

  const bindMenu = (menuButton: Element) => {
    menuButton.addEventListener('click', function () {
      let menu: any = document.querySelector('[data-type~=menu]');
      menu.classList.toggle('hiden');
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link
              data-type="header-link"
              href={'/'}
              onClick={hideMenuAfterClick}
            >
              Test SSG Next App
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div data-type="menu" className="hiden">
        <Menu />
      </div>
    </Box>
  );
}
