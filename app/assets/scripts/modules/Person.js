function Person(fullname, favColor) {
	this.name = fullname;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("Hello, my name is " + this.name + " and my favarite color is " + this.favoriteColor);		
	}
}

module.exports = Person;