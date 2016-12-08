
module.exports = function(app){
	app.get('/member',function(req,res){
		res.render('./member/join.ejs', { title: app.title });
		
	});
};