require('seneca')()
      .use('q1')
      .use('mesh',{base:true,pin:'role:math,action:subtract'});
