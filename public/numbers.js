;(function(global){
  var numbers = {
    VERSION: [0,0,1],
    EPSILON: 0.001,
    sum: function(arg1,arg2){
      return 1;
    },
    subtract: function(arg1,arg2){
      return 2;
    }
    // components
    ,"stats":{
      method1: function(arg){
        return 1;
      },
      method2: function(arg){
        return 2;
      }
    }
    ,"misc":{
      method1: function(arg){
        return 1;
      },
      method2: function(arg){
        return 2;
      }
    }
    ,"matrix":{
      method1: function(arg){
        return 1;
      },
      method2: function(arg){
        return 2;
      }
    }
    ,"linear":{
      method1: function(arg){
        return 1;
      },
      method2: function(arg){
        return 2;
      }
    }
    ,"calc":{
      method1: function(arg){
        return 1;
      },
      method2: function(arg){
        return 2;
      }
    }
  };

  module = module || {exports:{}};
  global["numbers"] = module.exports = numbers;
})(this || window);