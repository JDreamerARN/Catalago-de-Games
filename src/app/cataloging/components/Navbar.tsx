import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';

const games = [
  'FORTNITE',
  'MINECRAFT',
  'LEAGUE OF LEGENDS',
  'COUNTER-STRIKE 2',
  'ROBLOX',
  'VALORANT',
  'CALL OF DUTY WARZONE',
  'APEX LEGENDS',
  'GENSHIN IMPACT',
  'FREE FIRE',
  'GRAND THEFT AUTO V (GTA V)',
  'TETRIS',
  'MARIO KART 8 - DELUXE',
  'PLAYERUNKNOWN\'S BATTLEGROUNDS (PUBG)',
  'READ DEAD REDEMPTION 2',
  'SUPER MARIO BROS',
  'THE WITCHER 3: WILD HUNT',
  'TERRARIA',
  'ELDEN RING',
  'PONG (1972)',
  'SPACE INVADERS (1978)',
  'PAC-MAN (1980)',
  'SUPER MARIO BROS (1985)',
  'THE LEGEND OF ZELDA (1986)',
  'TETRIS (1984)',
  'DOOM (1993)',
  'SUPER MARIO 64 (1996)',
  'GRAND THEFT AUTO III (2001)'
];

export const Navbar = () => {
  const drawerWidth = '20%';

  return (
    <Drawer
      variant="permanent" // Barra lateral sempre visível
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'relative', // Mantém no fluxo do layout
        },
      }}
      open // Garante que está sempre aberto
    >
      <List>
        {games.map((game) => (
          <ListItem key={game} disablePadding>
            <ListItemButton>
              <ListItemText primary={game} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};