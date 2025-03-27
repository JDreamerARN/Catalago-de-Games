import { CssBaseline, Box } from '@mui/material';
import { Navbar } from './components/Navbar';

const Recommendation: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Navbar sempre visível */}
      <Navbar />
      
      {/* Conteúdo principal com margem fixa */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          marginLeft: '20%', // Largura fixa da Navbar
        }}
      >
        {/* Aqui vai o conteúdo da sua página */}
        <h1>Conteúdo Principal</h1>
      </Box>
    </Box>
  );
};

export default Recommendation;