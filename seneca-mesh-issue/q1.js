var subtract = function(x){
	this.add('role:math,action:subtract',function(msg,res){
	var subtract = msg.left - msg.right;
	res(null,{subtract});
	})

}

module.exports = subtract;
