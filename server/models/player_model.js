
const mongoose = require('mongoose');

const player_schema = new mongoose.Schema({
  id_player: String,
  player_name: Number,
  player_birthdate: Date, 
  is_current: Boolean,
  nb_won_rounds: Number,
  nb_won_games: Number,
  cards: [String]
});

const Player = mongoose.model('Player', player_schema);

module.exports = Player;
