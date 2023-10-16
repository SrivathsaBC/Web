//array
let arr=[10, true, "ABC", "S", 56.65];
console.log(arr);
//Type of Array
console.log(typeof arr);
console.log(Array.isArray (arr));
//Unshift-adding element at starting index
console.log(arr.unshift("000"));
console.log(arr);
//Push-adding elements at ending index
console.log(arr.push(500,"hiii" ));
console.log(arr);
//POP-deleting ending index value
console.log(arr.pop());
console.log(arr);
//Shift-deleting the starting value
console.log(arr.shift);
console.log(arr);
//Slice-Selecting the value 
console.log(arr.slice(1,4));
console.log(arr);
//Splice-seleting and editing the value
console.log(arr.splice(1,2, 500, "EEE"));
console.log(arr);
//array editing without using print statement
arr.push("SV");
console.log(arr);
let arr1=[200, 500, 600, 800, 650, 846, 153, 673]
console.log(arr1.slice(5));
console.log(arr1);
//concat-adding two arrays
console.log(arr.concat(arr1));
//includes-checking the values in array 
console.log(arr1.includes(673));
//join-converting array to string
console.log(arr1.join("+"));
console.log(arr1);
// reversing
console.log(arr.reverse());