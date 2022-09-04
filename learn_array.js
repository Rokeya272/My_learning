
//Array modify
let list = ['orange','cheese','milk'];

list[1]='tomato';
list[list.length]='potato';
list[list.length]='ice cream';
console.log(list);

//push method[at end]
let list1 = ['orange','cheese','milk'];

list1.push('mango');
console.log(list1);

//pop method[at end]
let list2 = ['orange','cheese','milk'];

list2.pop()
console.log(list2);

//unshift(at begin like push)
let list3 = ['orange','cheese','milk'];

list3.unshift('lemon');
console.log(list3);


//shift(at start like pop)

let list4 = ['orange','cheese','milk'];
list4.shift();
console.log(list4);

//concat method

let fruit = ['orange','banana'];
let meat = ['chicken','mutton','beef'];

console.log(fruit.concat(meat));
console.log(meat.concat(fruit));

//includes method(checks the list if it includes or not )

let shoplist = ['rice','flour','mango','oil','ginger'];

console.log(shoplist.includes('mango'));

//indexof

let shoplist2 = ['rice','flour','mango','oil','ginger'];

console.log(shoplist2.indexOf('oil'));

//reverse

let word =['R','E','S','P','E','C','T'];
let word2=['123','dog','human'];

console.log(word.reverse());
console.log(word2.reverse());

//join

let word3 =['R','E','S','P','E','C','T'];
let word4=['123','dog','human'];
let number = [3,89,26,0];

console.log(word3.reverse().join());
console.log(number.join('-'));

//slice
let name2= ['fabby','nafisa','akhi','shaki'];


console.log(name2.slice(0,2));
console.log(name2.slice(1,3));
console.log(name2.slice(2));
console.log(name2.slice(-2));
console.log(name2.slice(-3,-1));
console.log(name2.slice());

//splice() =>insertion(position,0,object)
//splice() => deletion(position,how much delete)

let tools = ['pencil','sharpner','notebook','colors','scale'];

console.log(tools.splice(3,2));
console.log(tools);
console.log(tools.splice(1,0,'eraser'));
console.log(tools);
console.log(tools.splice(2,0,'books','toys'));
console.log(tools);

//sort()[it's not used as it leads to unexpected results]

let people =['pipu','tina','rahat','jony','qumy'];
let sequence = [32,99,1,1000,61];
console.log(sequence.sort());
console.log(people.sort());

//array reference

let p=[7,9,3,1];
let q=p;
console.log(q);
p.push(0);
console.log(p);
console.log(q);

//const

const item = ['milk','chocolate'];
p=item.push('sugar');//possible
q=item.pop();//possible
//item=['butter','bread'];//error
console.log(item);

//nested array
let pairs=[['drink',['juice','lemon']],['bread','butter'],['orange','mango']];
console.log(pairs[2]);
console.log(pairs[2][0]);
console.log(pairs[0][1][1]);