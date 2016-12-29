'use strict';
// docs http://unitjs.com/
let test = require('unit.js');
let fs = require('fs');

let Email = require(__dirname+'/../modules/email');
let email = new Email();

email.generateSessionEmailForUser(8,(email) => {
	fs.writeFile(__dirname+'/../cache/matthew.html', email, () => {
		process.exit();
	});
});
