var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

// Sayembara Schema
var DesaSchema = mongoose.Schema({
	nama_desa: {
		type: String
	},
	lokasi_desa: {
		type: String
	},
	tanggal_buat: {
		type: Date,
		default: Date.now
	},
	foto_desa: {
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
var Desa = module.exports = mongoose.model('Desa', DesaSchema);
// var sayembara = new Sayembara();
// sayembara.resetCount(function(err, nextCount) {
 
//             // nextCount === 100 -> true
// });


module.exports.createDesa = function(newDesa, callback){
	newDesa.save(callback);
}

module.exports.getDesaById = function(id, callback){
	Desa.findById(id, callback);
}

module.exports.getAllDesa = function(query, options, callback){
	Desa.find(query, null, options, callback);
}

module.exports.editDesa = function(desa,updated_obj,callback){
	Desa.update({_id: desa.id}, updated_obj, function(err,log){
		if (err) throw err;
	});
}

module.exports.deleteDesa = function(id,callback){
	Desa.findByIdAndDelete(id,callback);
}