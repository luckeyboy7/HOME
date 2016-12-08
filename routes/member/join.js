
module.exports = function(app,User){
	app.get('/member',function(req,res){
		res.render('./member/join.ejs', { title: app.title });
		
	});
	
	app.post('/member/join',function(req,res){
		var user = new User();
		user.userId = req.body.userId;
		user.userPassWord = req.body.userPassWord;
		user.userEmail = req.body.userEmail;
		
		user.save(function(err){
			//오류
			if(err){
				console.error(err);
				res.json({result:0});
				return;
			}
			//성공
			res.json({result:1});
			
		});
	});
};