let data = [];

// trigger the initialization
const testInitialize = async function() {
    console.log("init...");
    // do something
    await sleep(5000);     
    data = [ "test 1"];
    console.log("init done");
}();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    testIsEnable: function(testId) { return data.includes(testId)},
    testInitialize: function() { 
        require('deasync').loopWhile(function() {return data.length == 0 ;});
    } 
}

