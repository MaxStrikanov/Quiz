const fs = require('fs')
const readlineSync = require('readline-sync');
const q = {
	1: './Questions/1.txt',
	2: './Questions/2.txt',
	3: './Questions/3.txt',
	4: './Questions/4.txt',
	5: './Questions/5.txt'
};

var i = randomInteger(1, 5);
function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}
//console.log(i);

var data = fs.readFileSync(q[i], 'utf8');
console.log('Вопрос №: '+i+ ' '+ data.toString());

// fs.readFile(q[i], function (err, data) {
// 	if (err) throw err;
// 	arr = data.toString();
// 	arr = arr.split('\n');
// 	console.log(arr.length);
//
// 	console.log("Вопрос №: "+i + data.toString());
// });
// console.log(arr);

//const answerInput = readlineSync.question('Ответьте на впрос, выбрав один из вариантов ' );
