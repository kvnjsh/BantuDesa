var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

// Article Schema
var ArticleSchema = mongoose.Schema({
	// id_artikel: {
	// 	type: Number,
	// 	index:true
	// },
	judul_artikel: {
		type: String
	},
	isi_artikel: {
		type: String
	},
	deskripsi_singkat: {
		type: String
	},
	topik: {
		type: String
	},
	foto: {
		type: String
	},
	can_comment: {
		type: Boolean
	},
	tanggal_buat: {
		type: Date,
		default: Date.now
	},
	id_user: {
		type: Schema.Types.ObjectId
	}
});

// ArticleSchema.plugin(autoIncrement.plugin, {
// 	model: 'Article',
// 	field: 'id_artikel',
// 	startAt: 4
// });
var Article = module.exports = mongoose.model('Article', ArticleSchema);
var artikel = new Article();
// artikel.resetCount(function(err, nextCount) {
 
//             // nextCount === 100 -> true
// });


module.exports.createArticle = function(newArticle, callback){
	newArticle.save(callback);
}

module.exports.getArticleById = function(id, callback){
	Article.findById(id, callback);
}

module.exports.getAllArticles = function(query, options, callback){
	Article.find(query, null, options, callback);
}

module.exports.editArticle = function(article,updated_obj,callback){
	Article.update({_id: article.id}, updated_obj, function(err,log){
		if (err) throw err;
	});
	// var savedArticle = new Article()
	// savedArticle = getArticleById(id);
	// savedArticle.judul_artikel = editedArticle.judul_artikel;
	// savedArticle.isi_artikel = editedArticle.isi_artikel;
	// savedArticle.deskripsi_singkat = editedArticle.deskripsi_singkat;
	// savedArticle.can_comment = editedArticle.can_comment;
	// savedArticle.update(callback);
}

module.exports.deleteArticle = function(id,callback){
	Article.findByIdAndDelete(id,callback);
}