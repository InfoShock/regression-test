// conf.js
exports.config = {
  specs: ['spec.js'],  
  framework: 'jasmine2',
	onPrepare: function() {  
	 
	var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
	jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
		savePath:'./test/reports'
	}));
}
}