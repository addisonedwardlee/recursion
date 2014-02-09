// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
	var a = "";
	var b = function(x) {
		if(x === undefined || typeof x === "function") {
			return
		} else if (typeof x === "number" || typeof x === "boolean" || x === null ) {
			a += x;
		} else if (typeof x === "string") {
			a += ("\"" + x + "\"")
		} else if(Array.isArray(x)) {
			a += ("[");
	        for(var i = 0; i < x.length; i++) {
	        	b(x[i]);
	        	if(i !== x.length - 1) {
					a += ",";
				};
	    	};
	    	a += ("]");
        } else {
			a += ("{");
			for(var key in x) {
				if(typeof x[key] !== "function" && x[key] !== undefined) {
					b(key);
					a += ":";
					b(x[key]);
					if(Object.keys(x).indexOf(key) !== (Object.keys(x).length - 1)) {
						a += ",";
					};
				};
			};
			a += ("}");
		};
	};
	b(obj);
	return a;
};

//var stringifyJSON = JSON.stringify;