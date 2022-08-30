



/*

1.	
a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
3.	How do you access the last element of any array?
4.	How do you access the first element of any array?
5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array


6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


*/
//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// creates an array of ages
let age = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("shows me all the ages from age array:",age);

/*
Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element,
     find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
*/


let result = ((age[age.length -1]) - age[0]); // substracts the first element of teh array from teh last element if the array. 
console.log("Substracts the first array from the last array:",result); // prints out the result from substracting the first elemnet of the array from the last element of the array.
console.log(age[0]); // prints out the first element of name array
console.log["prints out the length of the array:",age.length]// print out the number of elements in the array
console.log("prints out the lenght of the array minus 1:",age[age.length -1]) 



//Prints out the first element of the array

/*
age.push[10];
let total = 0;
for(let age of ages){
    total += age;
}
total /= ages.length;
console.log(total);
*/

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
for (let index = 0; index < names.length; index++) {
    console.log(" This is the index of my loop:", index, names[index])
    for(i=0, i,index;i++){
        console.print(index);
    }
}

//console.log(names[0]); 
/*
for (i=0; i < names.length; i++) {
    console.log(names.concat(names))
}
*/