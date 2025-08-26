const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
  //TODO is get jiggy with this api heeya
  text: String
});

const GoalModel = mongoose.model('Goal', goalSchema);

module.exports = GoalModel;