/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
// function reverseString(str) {
//     const strArray = str.split("");
//     const revArray = strArray.reverse();
//     const revString = revArray.join("");
//     return revString;
//   }
//   function reverseString2(str) {
//     return str.split("").reverse().join("");
//   }
  
//   function reverseString3(str) {
//     let revString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       revString += str[i];
//     }
//     return revString;
//   }
  
//   function reverseString4(str) {
//     if (str === "") return "";
//     else return reverseString4(str.substr(1)) + str.charAt(0);
//   }
  
//   function reverseString5(str) {
//     return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
//   }
  
//   console.log(reverseString("!dlroW olleH"))
//   console.log(reverseString2("!dlroW olleH"))
//   console.log(reverseString3("!dlroW olleH"))
//   console.log(reverseString4("!dlroW olleH"))
//   console.log(reverseString5("!dlroW olleH"))
//


//Part 1: Thinking Functionally
//Take an array of numbers and return the sum--------1
// let numbers = [1,2]

// function addTheNumbers(numbers) {
//     let sum = 0
//     numbers.forEach((Element) => sum += Element)
//     return sum
// }

// console.log(addTheNumbers(numbers))

//Take an array of numbers and return the Average---2
// let arr = [1,2]

// function numberAvg(arr) {
//     let sum = 0;
//     if (arr.length == 0) return `Empty Array`
    
//     arr.forEach(function(item,index){
//         sum += item;
//     })
//     return sum / arr.length
// }

// console.log(numberAvg(arr))

//Take an array of strings and return the longest string -----3
// let arr = [`bob`,`bear`,`brown`,`blackwood`,`block`,`ben`]
// let stringData= ``
// function longestString(array){
//     for(let i = 0; i < array.length; i++){
//         if (array[i].length > stringData.length){
//             stringData = array[i]
//         }
//     }
//     return stringData

// }
// console.log (longestString(arr))

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

// let arr = [`bob`,`bear`,`brown`,`blackwood`,`block`,`ben`]
// let num = 4
// let moreThanNum = []
// function longerThanNum (arr,num){
//     for(let i = 0; i < arr.length;i++){
//         if (arr[i].length > num) {
//             moreThanNum.push(arr[i])
//         }
        
//     }
//     return moreThanNum
// }
// console.log (longerThanNum(arr,num))


//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// let number = n => {
//     if (n === 0)return;
//     console.log(n);
//     number(n - 1)
// }
// number(21)



//Part 2: Thinking Methodically
// let sortedData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "48", name: "Barry", occupation: "Runner", age: "25" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// //Sort the array by age.
// sortedData.sort ((x,y) => Number(x.age) - Number(y.age) );
// console.log(sortedData);

//Filter the array to remove entries with an age greater than 50.

// let filteredData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "48", name: "Barry", occupation: "Runner", age: "25" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// function under50 (person){
//     return Number(person.age < 50) ;
// }
// function func(){
//     let data = filteredData.filter(under50);
//     console.log(data);
//     return data;
// }
// func();

//Map the array to change the “occupation” key to “job” .
// let mappedData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "48", name: "Barry", occupation: "Runner", age: "25" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// function rename (){
//     mappedData = mappedData.map(function(obj){
//         obj[`job`] = obj[`occupation`];
//         delete obj[`occupation`];
//         return obj;
//     });
  
//     console.log(mappedData)
// }
// rename()

////age plus 1

// function rename1 (){
//     let newAge =  mappedData.map ((x) =>({
//         ...x, age:String(Number(x.age) + 1) 
//     }));
         

//     console.log(newAge);
//     return newAge;
// }
// rename1()

//Map the array to change the “occupation” key to “job” and increment every age by 1.
// function updatedInfo (){
//     let newInfo =  mappedData.map ((x) =>{
//         let newX = {
//             ...x, 
//             job: x.occupation,
//             age:String(Number(x.age) + 1) 
//         };
//         delete newX.occupation;
//         return newX;
//     });
         

//     console.log(newInfo);
//     return newInfo;
// }
// updatedInfo()


////Use the reduce method to calculate the sum of the ages.
////Then use the result to calculate the average age.

// let array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "48", name: "Barry", occupation: "Runner", age: "25" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// let sumOfAge =  array.reduce((sum,x)=> sum + Number(x.age), 0) 
// let avgOfAge = Math.round(array.reduce((sum,x) => sum + Number(x.age),0) /array.length)
    
// console.log(`The sum of all ages is: ${sumOfAge}`)
// console.log(`The average of the ages is: ${avgOfAge}`)

