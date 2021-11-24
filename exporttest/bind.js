var mainFunction = function(callback) {
	//Did something
	console.log("In Main Function");
	callback();
}

var callbackFunction = function() {
	console.log('Variable: ' ;
	console.log("In Callback Function");
}

mainFunction(callbackFunction.bind("what does this mean"));