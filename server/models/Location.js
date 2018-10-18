const mongo = require('mongoose');
const Schema = mongo.Schema;

const LocationSchema = new Schema({
  cityId: {
    type: Number
  },
  name: {
    type: String
  },
  country: {
    type: String
  }
});
module.exports = Profile = mongo.model('Location', LocationSchema);
