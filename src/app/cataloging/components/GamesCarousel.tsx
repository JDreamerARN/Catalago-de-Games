import { Box, Card, CardMedia, IconButton, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useRef } from 'react';
import { GameHoverCard } from './GameHoverCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sliderRef = useRef<Slider>(null);
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: gamesPerPage,
    slidesToScroll: gamesPerPage,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    variableWidth: true, // Permite largura variável
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: Math.min(4, gamesPerPage),
          slidesToScroll: Math.min(4, gamesPerPage),
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: Math.min(3, gamesPerPage),
          slidesToScroll: Math.min(3, gamesPerPage),
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden',
      px: { xs: 4, sm: 6 }, // Padding lateral responsivo
      '&:hover .carousel-arrow': {
        opacity: 1 // Mostra as setas ao passar o mouse
      }
    }}>
      {/* Seta esquerda - só aparece quando há itens para trás */}
      <IconButton 
        onClick={handlePrev} 
        className="carousel-arrow"
        sx={{ 
          color: '#17191B',
          position: 'absolute',
          left: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          opacity: 0, // Inicia invisível
          transition: 'opacity 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)'
          },
          '&.slick-disabled': {
            display: 'none !important'
          }
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
      
      {/* Container principal do carrossel */}
      <Box sx={{
        width: '100%',
        overflow: 'visible',
        position: 'relative',
        '& .slick-slide': {
          padding: '0 8px', // Espaçamento entre slides
          boxSizing: 'border-box'
        },
        '& .slick-list': {
          overflow: 'visible',
          margin: '0 -8px' // Compensa o padding dos slides
        }
      }}>
        <Slider ref={sliderRef} {...settings}>
          {games.map((game, index) => (
            <Box 
              key={`${game.name}-${index}`} 
              sx={{ 
                position: 'relative',
                outline: 'none',
                width: '200px !important', // Largura fixa para cada card
              }}
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
                },
                mx: 'auto'
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
                  sx={{
                    position: 'absolute',
                    left: 'calc(100% + 16px)',
                    top: 0,
                    zIndex: 20
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <GameHoverCard game={game} />
                </Box>
              )}
            </Box>
          ))}
        </Slider>
      </Box>
      
      {/* Seta direita - só aparece quando há itens para frente */}
      <IconButton 
        onClick={handleNext} 
        className="carousel-arrow"
        sx={{ 
          color: '#17191B',
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          opacity: 0, // Inicia invisível
          transition: 'opacity 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)'
          },
          '&.slick-disabled': {
            display: 'none !important'
          }
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};