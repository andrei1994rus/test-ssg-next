import IUrl from '@/interfaces/IUrl';
import Link from 'next/link';
import styles from '@/styles/Menu.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { navData } from '@/data/navData';
import { navigationData } from '@/types/types';
import hideMenuAfterClick from '@/handleClick/hideMenuAfterClick';

const mapItems = (navData: navigationData) => {
  return navData.map((item: IUrl, index: number) => (
    <li className={styles.menu__li} key={index}>
      {getItem(item)}
    </li>
  ));
};

const getItem = (item: IUrl) => {
  const { name, path } = item;

  return (
    <strong onClick={hideMenuAfterClick}>
      <Link href={path}>{name}</Link>
    </strong>
  );
};

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ul className={styles.menu__ul}>{mapItems(navData)}</ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
