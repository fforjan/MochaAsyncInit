const mocha = require("mocha");
const testConfigure = require("./testConfigure");

mocha.describe("first test suite", function() 
{
	if(testConfigure.testIsEnable("first test suite - test 1")) {
		mocha.it("test 1", function (done) {   done(); })
	}

	if(testConfigure.testIsEnable("first test suite - test 2")) {
		mocha.it("test 2", function (done) {   done(); })
	}
});
