var seneca = require('seneca')({tag:'Anshul'});
seneca
			.use('mesh',{auto:true})
			//.client({type:'tcp',host:'172.23.238.182',port:8001});
			.ready(function() {
			 	seneca.act('role:math,action:subtract,left:3,right:2',console.log)
			});
			//.act('role:math,action:product,left:2,right:9',console.log);
