import { Box, Card, CardMedia, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import { GameHoverCard } from './GameHoverCard';

interface Game {
  name: string;
  releaseYear: number;
  rating: number;
  image: string;
}

interface GamesCarouselProps {
  games: Game[];
  gamesPerPage?: number;
}

export const GamesCarousel = ({ games, gamesPerPage = 5 }: GamesCarouselProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleNext = () => {
    setStartIndex(prev => Math.min(prev + gamesPerPage, games.length - gamesPerPage));
  };

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - gamesPerPage, 0));
  };

  // Calcula a margem esquerda para centralizar os cards
  const calculateMarginLeft = () => {
    const visibleCards = Math.min(gamesPerPage, games.length - startIndex);
    const containerWidth = visibleCards * 208 + (visibleCards - 1) * 16; // 200px card + 8px border + gap
    return `calc(50% - ${containerWidth / 2}px)`;
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      width: '100%',
      justifyContent: 'center',
      padding: '0 40px' // Adiciona padding geral
    }}>
      <IconButton 
        onClick={handlePrev} 
        disabled={startIndex === 0}
        sx={{ 
          color: '#17191B',
          position: 'absolute',
          left: 0,
          padding: '12px', // Aumenta a área clicável
          margin: '0 8px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
      
      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        position: 'relative',
        marginLeft: calculateMarginLeft(),
        transition: 'margin 0.3s ease'
      }}>
        {games.slice(startIndex, startIndex + gamesPerPage).map((game, index) => (
          <Box 
            key={`${game.name}-${index}`} 
            sx={{ position: 'relative' }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card sx={{ 
              width: 200,
              height: 300,
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)'
              }
            }}>
              <Box sx={{ 
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#17191B'
              }}>
                <CardMedia
                  component="img"
                  image={game.image}
                  alt={game.name}
                  sx={{ 
                    height: 'auto',
                    width: 'auto',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Card>
            
            {hoveredCard === index && (
              <Box 
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <GameHoverCard game={game} />
              </Box>
            )}
          </Box>
        ))}
      </Box>
      
      <IconButton 
        onClick={handleNext} 
        disabled={startIndex + gamesPerPage >= games.length}
        sx={{ 
          color: '#17191B',
          position: 'absolute',
          right: 0,
          padding: '12px', // Aumenta a área clicável
          margin: '0 8px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};