const mongoose = require('mongoose');

const game_schema = new mongoose.Schema({
  id_game: String,
  nb_players: Number,
  is_done: Boolean,
  players: [String],
  cards: [String]
});

const Game = mongoose.model('Game', game_schema);

module.exports = Game;
