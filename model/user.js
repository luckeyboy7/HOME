var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userId : String
	,userPassWord : String
	,userEmail : String
	,userRegDate : {type: Date, default : Date.now}
});

module.exports = mongoose.model('USER',userSchema);