// push,pop,shift,unshift,slice,splice,sort,filter,every,some,reduce,include,indexOf,lastIndexOf,concat

let result = document.querySelector("#result");

const nums = [800, 20, 10, 40, 500, 67, 677, 100, 9];

//anonymous callback function
nums.sort((a, b) => {
  return b - a;
});

nums.sort((a, b) => b - a);

// function sortNum(ade, taye) {
//   return ade - taye;
// }

// nums.push([5, 7, [99, 88, 111]], { name: "Niyi", age: 17 });
// console.log(nums[4][2][1]);
// console.log(nums[5].age);

// let slice = nums.slice();

// let deleted = nums.splice(1, 0, 99, 100, 101, "Ade");

// console.log(slice);

// let deleted = nums.pop();
result.innerHTML = nums;
console.log(nums);
// console.log(deleted);
