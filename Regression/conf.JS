// conf.js
exports.config = {
  specs: ['spec.js'],  
  framework: 'jasmine2',
	onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'outputxmldir',
        filePrefix: 'xmloutput'
    }));
	var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
	jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
		savePath:'./test/reports'
	}));
}
}