const mocha = require("mocha");
const testConfigure = require("./testConfigure");

mocha.describe("second test suite", function() 
{
	if(testConfigure.testIsEnable("second test suite - test 1")) {
		mocha.it("test 1", function (done) {   done(); })
	}

	if(testConfigure.testIsEnable("second test suite - test 2")) {
		mocha.it("test 2", function (done) {   done(); })
	}
});
