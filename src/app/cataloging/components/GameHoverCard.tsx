import { Card, CardMedia, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';

const defaultGameplayImages = [
  "/design/doom93gameplay1.jpg",
  "/design/doom93gameplay2.jpg"
];

interface Game {
  name: string;
  releaseYear: number;
  rating: number;
  image: string;
}

interface GameHoverCardProps {
  game: Game;
}

export const GameHoverCard = ({ game }: GameHoverCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % defaultGameplayImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card sx={{
      position: 'absolute',
      left: '100%',
      top: 0,
      width: 300,
      height: '100%',
      ml: 2,
      zIndex: 10,
      borderRadius: 2,
      boxShadow: 3,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#17191B',
      color: '#FFFFFF'
    }}>
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{game.name}</Typography>
        <Typography variant="subtitle1">⭐ {game.rating}/10</Typography>
      </Box>
      
      <Box sx={{ 
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#000000'
      }}>
        <CardMedia
          component="img"
          image={defaultGameplayImages[currentImageIndex]}
          alt={`Gameplay ${currentImageIndex + 1}`}
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </Box>
    </Card>
  );
};