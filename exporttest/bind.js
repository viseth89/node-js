var mainFunction = function(callback) {
    //Did something
    console.log("In Main Function");
    callback();
    }
    var callbackFunction = function() {
    console.log("In Callback Function");
    }
    mainFunction(callbackFunction("Variable"));