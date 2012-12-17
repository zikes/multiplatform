var fs = require('fs'),
    path = require('path');

function load(file,indent){
  var output = '', script;
  file = process.cwd() + '\\' + path.normalize(file);
  output = fs.readFileSync(file,'utf-8').replace(/module\.exports = /,'')
  if(indent){
    output = output.replace(/^  /gm,'    ').replace(/^};/m,'  }\n')
  }
  return output;
}

// core
var library = load('./core/index.js');

// components
['calc','linear','matrix','misc','stats'].forEach(function(component){
  var path = './components/'+component+'.js';
  var comp = load(path,true);
  library = library.replace(/\/\/ components\r?\n/,'// components\n  ,"'+component+'":'+comp);
});

fs.writeFileSync('public/numbers.js',';(function(global){\n  var numbers = ' + library.replace(/^(?!{)/gm,'  ') + '\n\n  module = module || {exports:{}};\n  global["numbers"] = module.exports = numbers;\n})(this || window);');