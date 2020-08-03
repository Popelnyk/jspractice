let arr = ['i', 'go', 'home'];

//delete arr[1];
//console.log(arr);


arr.splice(1, 1);

arr.push('pop', 'kok', 'lql');
console.log(arr);
arr.splice(1, 2, '11', '22', '33');

console.log(arr);


["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
   console.log(`item: ${item}, index: ${index}, ${item.length}`);
});


console.log(arr.find(item => item.length > 2));
console.log(arr.filter(item => item.length === 2));
console.log(arr.map(item => item.length));