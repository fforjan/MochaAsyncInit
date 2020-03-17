const mocha = require("mocha");

let data = [];

// trigger the initialization
const result = async function() {
    console.log("init...");
    // do something
    await sleep(5);     
    data = [ "test 1"];

    console.log("run...");
    mocha.run();
    console.log("init done");
}();;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    testIsEnable: function(testId) { return data.includes(testId)},
}

