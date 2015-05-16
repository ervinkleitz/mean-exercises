var mongoose = require('mongoose');
mongoose.connect('localhost', 'gandalfs-diary');

var Schema = mongoose.Schema;

var journalSchema = new Schema({
	entry: String
});

var journalEntry = mongoose.model('Holla', journalSchema);

module.exports = journalEntry;