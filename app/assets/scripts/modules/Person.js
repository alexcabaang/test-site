class Person {
	constructor(fullname, favColor) {
		this.name = fullname;
		this.favoriteColor = favColor;
	}

	greet() {
		console.log("Hi there, my name is " + this.name + " and my favarite color is " + this.favoriteColor);		
	}
}

//module.exports = Person;
export default Person;