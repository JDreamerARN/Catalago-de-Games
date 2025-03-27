import { CssBaseline, Box, Typography } from '@mui/material';
import { Navbar } from './components/Navbar';
import { GamesCarousel } from './components/GamesCarousel';

const topRatedGames: Array<{
  name: string;
  releaseYear: number;
  rating: number;
  image: string;
}> = [
  { name: "FORTNITE", releaseYear: 2017, rating: 8, image: "/design/Fortnite.jpeg" },
  { name: "MINECRAFT", releaseYear: 2011, rating: 9, image: "/design/Minecraft.jpeg" },
  { name: "LEAGUE OF LEGENDS", releaseYear: 2009, rating: 9, image: "/design/LOL.jpg" },
  { name: "COUNTER-STRIKE 2", releaseYear: 2023, rating: 9, image: "/design/CS2.jpg" },
  { name: "ROBLOX", releaseYear: 2006, rating: 7, image: "/design/Roblox.png" },
  { name: "VALORANT", releaseYear: 2020, rating: 8, image: "/design/Valorant.jpg" },
  { name: "CALL OF DUTY WARZONE", releaseYear: 2020, rating: 8, image: "/design/Warzone2.jpg" },
  { name: "APEX LEGENDS", releaseYear: 2019, rating: 8, image: "/design/APEX.png" },
  { name: "GENSHIN IMPACT", releaseYear: 2020, rating: 8, image: "/design/Genshi.png" },
  { name: "GRAND THEFT AUTO V (GTA V)", releaseYear: 2013, rating: 10, image: "/design/GTA5.jpeg" },
  { name: "MARIO KART 8 - DELUXE", releaseYear: 2017, rating: 9, image: "/design/MarioKart8.jpeg" },
  { name: "RED DEAD REDEMPTION 2", releaseYear: 2018, rating: 10, image: "/design/RRR2.jpg" },
  { name: "THE WITCHER 3: WILD HUNT", releaseYear: 2015, rating: 10, image: "/design/Witcher3.jpg" },
  { name: "Skyrim", releaseYear: 2011, rating: 9, image: "/design/Skyrim.jpg" }
];


const Recommendation: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F7F7F7', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ width: '8px', backgroundColor: '#17191B', minHeight: '100vh' }} />
      
      <Box component="main" sx={{ 
        flexGrow: 1, 
        p: 3, 
        backgroundColor: '#F7F7F7',
        maxWidth: 'calc(100% - 8px)'
      }}>
        <Typography variant="h4" sx={{ 
          mb: 4, 
          fontWeight: 'bold', 
          color: '#17191B',
          textAlign: 'center'
        }}>
          Jogos Mais Bem Avaliados
        </Typography>
        
        <GamesCarousel games={topRatedGames} />
      </Box>
    </Box>
  );
};

export default Recommendation;