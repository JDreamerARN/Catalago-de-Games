import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Box,
  Collapse,
  Checkbox,
  FormControlLabel,
  Button,
  Chip,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "@fontsource/jost/700.css";

interface Game {
  name: string;
  releaseYear: number;
  rating?: number;
}

const gamesData: Game[] = [
  { name: "FORTNITE", releaseYear: 2017, rating: 8 },
  { name: "MINECRAFT", releaseYear: 2011, rating: 9 },
  { name: "LEAGUE OF LEGENDS", releaseYear: 2009, rating: 9 },
  { name: "COUNTER-STRIKE 2", releaseYear: 2023, rating: 9 },
  { name: "ROBLOX", releaseYear: 2006, rating: 7 },
  { name: "VALORANT", releaseYear: 2020, rating: 8 },
  { name: "CALL OF DUTY WARZONE", releaseYear: 2020, rating: 8 },
  { name: "APEX LEGENDS", releaseYear: 2019, rating: 8 },
  { name: "GENSHIN IMPACT", releaseYear: 2020, rating: 8 },
  { name: "FREE FIRE", releaseYear: 2017, rating: 7 },
  { name: "GRAND THEFT AUTO V (GTA V)", releaseYear: 2013, rating: 10 },
  { name: "TETRIS", releaseYear: 1984, rating: 9 },
  { name: "MARIO KART 8 - DELUXE", releaseYear: 2017, rating: 9 },
  { name: "PLAYERUNKNOWN'S BATTLEGROUNDS (PUBG)", releaseYear: 2017, rating: 8, },
  { name: "READ DEAD REDEMPTION 2", releaseYear: 2018, rating: 10 },
  { name: "SUPER MARIO BROS (1985)", releaseYear: 1985, rating: 9 },
  { name: "THE WITCHER 3: WILD HUNT", releaseYear: 2015, rating: 10 },
  { name: "TERRARIA", releaseYear: 2011, rating: 9 },
  { name: "ELDEN RING", releaseYear: 2022, rating: 10 },
  { name: "PONG (1972)", releaseYear: 1972, rating: 7 },
  { name: "SPACE INVADERS (1978)", releaseYear: 1978, rating: 8 },
  { name: "PAC-MAN (1980)", releaseYear: 1980, rating: 9 },
  { name: "THE LEGEND OF ZELDA (1986)", releaseYear: 1986, rating: 9 },
  { name: "TETRIS (1984)", releaseYear: 1984, rating: 9 },
  { name: "DOOM (1993)", releaseYear: 1993, rating: 9 },
  { name: "SUPER MARIO 64 (1996)", releaseYear: 1996, rating: 10 },
  { name: "GRAND THEFT AUTO III (2001)", releaseYear: 2001, rating: 9 },
];

export const Navbar = () => {
  // Estados para controle da UI
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Estados para filtros
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Configurações visuais
  const drawerWidth = 280;
  const backgroundColor = "#F2F2F2";
  const searchColor = "#D9D9D9";
  const primaryColor = "#0A081D";

  // Opções de filtro
  const filterOptions = [
    { id: "alphabetical", label: "Ordem Alfabética" },
    { id: "release", label: "Ordem de Lançamento" },
    { id: "rating", label: "Melhor Avaliado" },
  ];

  // Manipuladores de filtros
  const handleFilterChange = (filterId: string) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter((f) => f !== filterId));
    } else if (activeFilters.length < 2) {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  // Aplicar filtros selecionados
  const applyFilters = () => {
    if (activeFilters.length === 0 && appliedFilters.length > 0) {
      setAppliedFilters([]);
    } else {
      setAppliedFilters(activeFilters);
    }
    setFiltersOpen(false);
  };

  // Remover filtro individual
  const removeFilter = (filterId: string) => {
    const newAppliedFilters = appliedFilters.filter((f) => f !== filterId);
    setAppliedFilters(newAppliedFilters);
    setActiveFilters(
      activeFilters.filter((f) => newAppliedFilters.includes(f))
    );
  };

  // Ordenar jogos conforme filtros
  const sortGames = (games: Game[]) => {
    if (appliedFilters.length === 0) return games;

    if (
      appliedFilters.includes("alphabetical") &&
      appliedFilters.includes("release")
    ) {
      return [...games].sort(
        (a, b) => b.releaseYear - a.releaseYear || a.name.localeCompare(b.name)
      );
    }

    if (
      appliedFilters.includes("alphabetical") &&
      appliedFilters.includes("rating")
    ) {
      return [...games].sort(
        (a, b) =>
          (b.rating || 0) - (a.rating || 0) || a.name.localeCompare(b.name)
      );
    }

    if (
      appliedFilters.includes("release") &&
      appliedFilters.includes("rating")
    ) {
      return [...games].sort(
        (a, b) =>
          b.releaseYear - a.releaseYear || (b.rating || 0) - (a.rating || 0)
      );
    }

    if (appliedFilters.includes("alphabetical")) {
      return [...games].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (appliedFilters.includes("release")) {
      return [...games].sort((a, b) => b.releaseYear - a.releaseYear);
    }
    if (appliedFilters.includes("rating")) {
      return [...games].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return games;
  };

  // Filtrar e ordenar jogos
  const filteredAndSortedGames = sortGames(
    gamesData.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          position: "relative",
          backgroundColor,
          borderRight: "none",
          overflow: "visible",
          fontFamily: '"Jost", sans-serif',
          display: "flex",
          flexDirection: "column",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#F2F2F2",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#D9D9D9",
            borderRadius: "4px",
          },
        },
      }}
      open
    >
      {/* Barra de Pesquisa */}
      <Box
        sx={{
          p: 2,
          backgroundColor,
          borderBottom: "1px solid #e0e0e0", // Linha divisória sutil
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Pesquisar jogos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            backgroundColor: searchColor,
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": {
                border: "none",
                boxShadow: `0 0 0 2px ${primaryColor}20`,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: primaryColor }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Corpo Principal */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor,
        }}
      >
        {/* Seção de Filtros */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            cursor: "pointer",
            backgroundColor,
            "&:hover": {
              backgroundColor: `${primaryColor}08`,
            },
            borderRadius: 0,
            borderBottom: "1px solid #e0e0e0",
          }}
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <FilterAltOutlinedIcon sx={{ color: primaryColor }} />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: primaryColor,
              }}
            >
              Filtros
            </Typography>
          </Stack>

          {/* Tags de filtros aplicados */}
          <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {appliedFilters.map((filterId) => {
              const filter = filterOptions.find((f) => f.id === filterId);
              return (
                <Chip
                  key={filterId}
                  label={filter?.label}
                  onDelete={() => removeFilter(filterId)}
                  deleteIcon={<CloseIcon />}
                  size="small"
                  sx={{
                    backgroundColor: primaryColor,
                    color: "white",
                    "& .MuiChip-deleteIcon": {
                      color: "white",
                      "&:hover": { color: "#e0e0e0" },
                    },
                  }}
                />
              );
            })}
          </Box>
        </Paper>

        {/* Painel de Opções de Filtro */}
        <Collapse in={filtersOpen}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              backgroundColor,
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            {filterOptions.map((option) => (
              <FormControlLabel
                key={option.id}
                control={
                  <Checkbox
                    checked={activeFilters.includes(option.id)}
                    onChange={() => handleFilterChange(option.id)}
                    disabled={
                      activeFilters.length === 2 &&
                      !activeFilters.includes(option.id)
                    }
                    sx={{
                      color: primaryColor,
                      "&.Mui-checked": { color: primaryColor },
                    }}
                  />
                }
                label={option.label}
                sx={{
                  display: "block",
                  mx: 0,
                  my: 1,
                  "& .MuiTypography-root": {
                    fontFamily: '"Jost", sans-serif',
                    fontWeight: 500,
                  },
                }}
              />
            ))}
            <Button
              variant="contained"
              fullWidth
              onClick={applyFilters}
              sx={{
                mt: 2,
                backgroundColor: primaryColor,
                "&:hover": {
                  backgroundColor: `${primaryColor}CC`,
                },
                borderRadius: "4px",
                fontFamily: '"Jost", sans-serif',
                fontWeight: 700,
              }}
              disabled={
                activeFilters.length === 0 && appliedFilters.length === 0
              }
            >
              Aplicar Filtros
            </Button>
          </Paper>
        </Collapse>

        {/* Lista de Jogos - Parte modificada */}
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            position: "relative",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#D9D9D9",
              borderRadius: "3px",
            },
          }}
        >
          <List
            sx={{
              py: 0,
              width: "100%", 
              paddingLeft: 0,
              paddingRight: 0,
              marginLeft: 0,
              marginRight: 0,
            }}
          >
            {filteredAndSortedGames.map((game) => (
              <ListItem
                key={game.name}
                disablePadding
                onMouseEnter={() => setHoveredItem(game.name)} 
                onMouseLeave={() => setHoveredItem(null)} 
                sx={{
                  width: "100%", 
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: "100%", 
                    mx: 0, 
                    px: 0, 
                    backgroundColor: "#F2F2F2",
                    border: "1px solid transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#e0e0e0",
                      boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <ListItemButton
                    sx={{
                      py: 1.5,
                      px: 2,
                      width: "100%",
                    }}
                  >
                    <ListItemText
                      primary={game.name}
                      secondary={
                        appliedFilters.includes("release")
                          ? `Lançamento: ${game.releaseYear}`
                          : ""
                      }
                      primaryTypographyProps={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "rgb(31 41 55)",
                        whiteSpace: "normal",
                        overflow: "visible",
                        style: {
                          wordBreak: "break-word",
                          display: "-webkit-box",
                          WebkitLineClamp:
                            hoveredItem === game.name ? "unset" : 2,
                          WebkitBoxOrient: "vertical",
                        },
                      }}
                      secondaryTypographyProps={{
                        fontSize: "0.75rem",
                        color: "text.secondary",
                        fontFamily: '"Jost", sans-serif',
                      }}
                    />
                  </ListItemButton>
                </Paper>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};
