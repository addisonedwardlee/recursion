// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
	var a = "";
	var b = function(x) {
		if(x === undefined || typeof x === "function") {
			return
		} else if (typeof x === "number") {
			a += (x);
		} else if (typeof x === "string") {
			a += ("\"" + x + "\"")
		} else if(Array.isArray(obj)) {
	        for(var i = 0; i < obj.length; i++) {
	          iterator(obj[i], i, obj);
	    	};
        } else {
			a += ("{");
			for(key in obj) {
				b(key);
				a += ":";
				b(obj.key);
			};
			a += ("}");
		}
	};
	b(obj);
	return a;
};