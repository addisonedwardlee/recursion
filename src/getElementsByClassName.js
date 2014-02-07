// If life was easy, we could just do things the easy way:
/*
var getElementsByClassName = function (className) {
   return document.getElementsByClassName(className);
    };
*/
// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var a = [];
	var b = function(child) {
		var x = child.childNodes;
		for(var i = 0; i < x.length; i++) {
			if(x[i].className !== undefined) {
//what is a better way to handle undefined?
			if(x[i].className.indexOf(className) !== -1) {
				a.push(x[i]);
			};
			if(x[i].hasChildNodes()) {
				b(x[i]);
			}
		}
		}
	}
	b(document);
	return a;
};