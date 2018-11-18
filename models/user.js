var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	usercode: {
		type: Number
	},
	id_desa: {
		type: Schema.Types.ObjectId
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	// Load hash from your password DB. 
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
	     if(err) throw err;
	     callback(null, isMatch);
	});
}

module.exports.changePassword = function(id, oldpassword, newpassword, confirmnewpassword, hash, callback){
	var user = new User();
	user = getUserById(id);
	if(comparePassword(oldpassword,hash,callback)){
		if(newpassword==confirmnewpassword){
			user.password = newpassword;
			bcrypt.hash(user.password,salt,function(err,hash){
				user.password = hash;
				user.update(callback);
			});
		}
	}

}