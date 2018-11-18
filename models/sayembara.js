var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

// Sayembara Schema
var SayembaraSchema = mongoose.Schema({
	// id_sayembara: {
	// 	type: Number,
	// 	index:true
	// },
	judul_sayembara: {
		type: String
	},
	topik: {
		type: String
	},
	deskripsi_singkat: {
		type: String
	},
	isi_sayembara: {
		type: String
	},
	foto_sayembara: {
		type: String
	},
	// id_desa: {
	// 	type: Number
	// },
	tanggal_buat: {
		type: Date,
		default: Date.now
	},
	tanggal_selesai: {
		type: Date
	},
	id_user: { 
		type: Schema.Types.ObjectId
	}

});

// SayembaraSchema.plugin(autoIncrement.plugin, {
// 	model: 'Sayembara',
// 	field: 'id_sayembara',
// 	startAt: 2
// });
var Sayembara = module.exports = mongoose.model('Sayembara', SayembaraSchema);
var sayembara = new Sayembara();
// sayembara.resetCount(function(err, nextCount) {
 
//             // nextCount === 100 -> true
// });


module.exports.createSayembara = function(newSayembara, callback){
	newSayembara.save(callback);
}

module.exports.getSayembaraById = function(id, callback){
	Sayembara.findById(id, callback);
}

module.exports.getAllSayembara = function(query, options, callback){
	Sayembara.find(query, null, options, callback);
}

module.exports.editSayembara = function(sayembara,updated_obj,callback){
	Sayembara.update({_id: sayembara.id}, updated_obj, function(err,log){
		if (err) throw err;
	});
}

module.exports.deleteSayembara = function(id,callback){
	Sayembara.findByIdAndDelete(id,callback);
}