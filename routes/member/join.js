
module.exports = function(app,User){
	app.get('/member',function(req,res){
		res.render('./member/join.ejs', { title: app.title });
		
	});
};