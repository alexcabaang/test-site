var $= require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

var john = new Person("Alicia Cabaang", "blue");
john.greet();

class Adult extends Person {
	payTaxes(){
		console.log(this.name + " now owes $0 in taxes...");
	}
}

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();



// $("h1").remove();