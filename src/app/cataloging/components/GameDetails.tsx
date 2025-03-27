import { Box, Typography, Button, Divider, Chip } from '@mui/material';

interface GameDetailsProps {
  onClose: () => void;
  game: {
    name: string;
    releaseYear: number;
    image: string;
  };
}

const GameDetails: React.FC<GameDetailsProps> = ({ onClose, game }) => {
  // Dados específicos do Doom (podem ser substituídos pelos dados do game prop)
  const gameDetails = {
    name: game.name === "DOOM" ? "DOOM" : game.name,
    releaseDate: game.name === "DOOM" ? "10/12/1993" : `01/01/${game.releaseYear}`,
    developer: game.name === "DOOM" ? "ID Software" : "Desenvolvedora desconhecida",
    publisher: game.name === "DOOM" ? "ID Software" : "Distribuidora desconhecida",
    copiesSold: game.name === "DOOM" ? "20 milhões" : "Dados não disponíveis",
    genres: game.name === "DOOM" ? ["FPS", "Ação", "Shoot'em up", "Retro"] : ["Gênero não especificado"]
  };

  return (
    <Box className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <Box className="bg-white rounded-lg p-6 max-w-4xl w-full relative">
        {/* Botão de fechar */}
        <Button 
          onClick={onClose}
          className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white"
          variant="contained"
        >
          Fechar
        </Button>

        {/* Conteúdo do jogo */}
        <Box className="flex flex-col md:flex-row gap-6">
          {/* Capa do jogo */}
          <Box className="flex-shrink-0">
            <img 
              src={game.image} 
              alt={`Capa do jogo ${game.name}`} 
              className="w-64 h-80 object-cover rounded-lg"
            />
          </Box>

          {/* Informações do jogo */}
          <Box className="flex-grow">
            {/* Título */}
            <Typography variant="h3" className="font-bold text-3xl mb-2">
              {gameDetails.name} ({game.releaseYear})
            </Typography>

            {/* Desenvolvedora e Distribuidora */}
            <Typography variant="body1" className="text-gray-600 mb-4">
              Desenvolvedora: {gameDetails.developer}<br />
              Distribuidora: {gameDetails.publisher}
            </Typography>

            {/* Divisor com ano e vendas */}
            <Divider className="my-4">
              <Box className="flex gap-4 items-center">
                <Typography variant="body2" className="font-medium">
                  Lançamento: {gameDetails.releaseDate}
                </Typography>
                <Typography variant="body2" className="font-medium">
                  Vendas: +{gameDetails.copiesSold} cópias
                </Typography>
              </Box>
            </Divider>

            {/* Tags de gêneros */}
            <Box className="mt-6 flex flex-wrap gap-2">
              {gameDetails.genres.map((genre, index) => (
                <Chip 
                  key={index}
                  label={genre}
                  className="bg-blue-100 text-blue-800 font-medium"
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GameDetails;