var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

// Peserta Schema
var PesertaSchema = mongoose.Schema({
	// peserta_id: {
	// 	type: Number,
	// 	index:true
	// },
	id_sayembara: {
		type: Schema.Types.ObjectId
	},
	id_user: { 
		type: Schema.Types.ObjectId
	},
	subtopik: {
		type: String
	},
	tgl_kirim: {
		type: Date,
		default: Date.now
	},
	file_proposal: {
		type: String
	}
});

var Peserta = module.exports = mongoose.model('Peserta', PesertaSchema);

module.exports.createPeserta = function(newPeserta, callback){
	newPeserta.save(callback);
}

module.exports.getPesertaById = function(id, callback){
	Peserta.findById(id, callback);
}

module.exports.getAllPeserta = function(query, options, callback){
	Peserta.find(query, null, options, callback);
}
