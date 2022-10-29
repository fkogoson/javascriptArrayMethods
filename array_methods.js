//Javascripti Array Methods

//[3, 4, 5, 6].at(1)//4
let num_list = [3, 4, 5, 6];
console.log(num_list.at(1));

// num_list.pop();
console.log(num_list);//[3, 4, 5]

//num_list.push(7);
console.log(num_list)//[3, 4, 5, 6, 7]

// num_list.fill(1);
console.log(num_list)//[1, 1, 1, 1]

console.log(num_list.join("-"));//3-4-5-6

// num_list.shift();
console.log(num_list);//[4, 5, 6]

// num_list.reverse();
console.log(num_list);//[ 6, 5, 4, 3 ]

// num_list.unshift();
console.log(num_list.unshift(1));//[ 6, 5, 4, 3 ]

console.log(num_list.includes(5));//true

console.log(num_list.map((num) => num + 6));//[ 7, 9, 10, 11, 12 ]

console.log(num_list.find((num) => num > 4));//5

console.log(num_list.filter((num) => num > 4));//[ 5, 6 ]

console.log(num_list.every((num) => num > 5));//[ 5, 6 ]

console.log(num_list.findIndex((num) => num > 4));//3





