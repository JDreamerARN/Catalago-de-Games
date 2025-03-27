import { Box, Typography, Divider, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface GameDetailsProps {
    onBack: () => void;
  }

const doomGameData = {
  name: "DOOM (1993)",
  coverImage: "/design/Doom1993.jpg",
  developer: "id Software",
  publisher: "id Software, GT Interactive, Activision",
  releaseDate: "December 10, 1993",
  copiesSold: "~10 million",
  genres: ["FPS", "Action", "Horror"],
  platforms: ["MS-DOS", "Windows", "macOS", "Linux", "Switch", "PS4", "Xbox One", "Mobile"],
  synopsis: "DOOM is a first-person shooter game developed by id Software. The player assumes the role of a space marine, popularly known as 'Doomguy', fighting through hordes of demons from Hell. The game established many conventions of the first-person shooter genre and was highly influential. It pioneered online distribution and shareware marketing.",
  pcRequirements: {
    minimum: "MS-DOS compatible PC\n4MB RAM\n10MB hard drive space",
    recommended: "486DX processor\n8MB RAM"
  },
  rating: 9
};

export const GameDetails = ({ onBack }: GameDetailsProps) => {
    return (
      <Box sx={{
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        my: 4,
        backgroundColor: '#F7F7F7',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3
      }}>
        <Typography 
          onClick={onBack}
          sx={{
            cursor: 'pointer',
            color: '#17191B',
            fontWeight: 'bold',
            mb: 2,
            px: 4,
            pt: 2,
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          ← Voltar para Recomendações
        </Typography>
      
      {/* Main content */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        p: 4,
        gap: 4
      }}>
        {/* Cover image */}
        <Box sx={{
          flex: { md: '0 0 40%', lg: '0 0 30%' },
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
          height: 'fit-content'
        }}>
          <img 
            src={doomGameData.coverImage} 
            alt={`${doomGameData.name} cover`}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </Box>
        
        {/* Game info */}
        <Box sx={{ flex: 1 }}>
          {/* Title */}
          <Typography variant="h3" sx={{ 
            fontWeight: 'bold', 
            color: '#17191B',
            mb: 1
          }}>
            {doomGameData.name}
          </Typography>
          
          {/* Developer and publisher */}
          <Typography variant="subtitle1" sx={{ color: '#555', mb: 3 }}>
            Developed by: {doomGameData.developer}<br />
            Published by: {doomGameData.publisher}
          </Typography>
          
          {/* Divider */}
          <Divider sx={{ my: 2, borderColor: '#ccc' }} />
          
          {/* Release info */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Release Information
            </Typography>
            <Typography>
              <strong>Release Date:</strong> {doomGameData.releaseDate}
            </Typography>
            <Typography>
              <strong>Copies Sold:</strong> {doomGameData.copiesSold || 'N/A'}
            </Typography>
            <Typography>
              <strong>Rating:</strong> {doomGameData.rating}/10
            </Typography>
          </Box>
          
          {/* Genres */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Genres
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {doomGameData.genres.map((genre) => (
                <Chip 
                  key={genre}
                  label={genre}
                  sx={{ 
                    backgroundColor: '#17191B',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </Stack>
          </Box>
          
          {/* Synopsis */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Synopsis
            </Typography>
            <Typography sx={{ textAlign: 'justify' }}>
              {doomGameData.synopsis}
            </Typography>
          </Box>
          
          {/* Platforms */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Available Platforms
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {doomGameData.platforms.map((platform) => (
                <Chip 
                  key={platform}
                  label={platform}
                  variant="outlined"
                  sx={{ 
                    borderColor: '#17191B',
                    color: '#17191B',
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </Stack>
          </Box>
          
          {/* PC Requirements */}
          {doomGameData.pcRequirements && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                PC System Requirements
              </Typography>
              <Box sx={{ 
                backgroundColor: '#eee', 
                p: 2, 
                borderRadius: 1,
                whiteSpace: 'pre-line'
              }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Minimum:
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  {doomGameData.pcRequirements.minimum}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Recommended:
                </Typography>
                <Typography>
                  {doomGameData.pcRequirements.recommended}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};