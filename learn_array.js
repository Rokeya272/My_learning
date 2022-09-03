
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