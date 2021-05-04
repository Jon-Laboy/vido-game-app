//BASE URL
const API_KEY = process.env.REACT_APP_GAME_API_KEY;

const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current month/day/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
//Upcoming Games
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// New Games
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${API_KEY}`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const searchGamesURL = (game_name) =>
  `${base_url}games?search=${game_name}&key=${API_KEY}&page_size=9`;

// https://api.rawg.io/api/games?search=portal&key=a331fe3877da4b238c9b16cdc4f27222
