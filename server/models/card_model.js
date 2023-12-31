const mongoose = require('mongoose');

const card_schema = new mongoose.Schema({
  id_card: String,
  row_pos: Number,
  col_pos: Number,
  dots: Number,
  color: String,
  color: Boolean
});

const Card = mongoose.model('Card', card_schema);

module.exports = Card;
