
const mocha = require("mocha");
const testConfigure = require("./testConfigure");

let testSuite =  function() {

	mocha.describe("first test suite", function() 
	{
		testConfigure.testInitialize();
		
		if(testConfigure.testIsEnable("test 1")) {
			mocha.it("test 1", function (done) {   done(); })
		}

		if(testConfigure.testIsEnable("test 2")) {
			mocha.it("test 2", function (done) {   done(); })
		}
	});
}
testSuite();