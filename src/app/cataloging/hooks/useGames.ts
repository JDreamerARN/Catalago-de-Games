//import { useState, useEffect } from 'react';
//import axios from 'axios';
//import { Game } from '../types/game.d';

//const API_KEY = "CHAVE_RAWG";

//export const useGames = (endpoint: string) => {
  //const [games, setGames] = useState<Game[]>([]);

  //useEffect(() => {
    //axios.get(`https://api.rawg.io/api/${endpoint}?key=${API_KEY}`)
      //.then((res) => setGames(res.data.results));
  //}, [endpoint]);

  //return games;
//};