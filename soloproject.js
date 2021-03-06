/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = 'hellostrives'
console.log(test)

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.

*/
let sum  = 10 + 20
console.log(sum)
 

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = 20
for (let i=0; i<=random; i++)
console.log(i)
/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me ={

  name :'your name',
  surnmae:'your surname',
  age:'your age',
  
}
console.log(me)
/* Ex.E 
    Programmatically remove the age property from the previously create object.
    
*/
delete me.age
console.log(me)
/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
me.skills='javascript'
console.log(me)
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
delete me.skills
console.log(me)
// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

let dice = 6
for ( i=0; i<=dice; i++){
console.log(i)
}
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

let whoIsBigger= Math.max(20,10)


console.log(whoIsBigger)
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
let arrayme= ('i love coding')
let splitme =arrayme.split(" ")
console.log(splitme)
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
let deleteOne= function(){
let a =true
let b ='hello'
  if (a=== true){
    console.log(b.substring(1))


  }
  else {
    console.log(b.slice(0,1))
  }
}
deleteOne()
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
let only = ('i have 4 dogs')
let onlyLetters = only.replace("4","")
console.log(onlyLetters)
/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
let isThisAnEmail= 'email'
para ='email@'
if(para=== 'email@'){
  console.log(isThisAnEmail)
}
/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
let whatDayIsIt='monday'
let message= 'wrong day'
if (whatDayIsIt=== 'monday')
  console.log(`currentday:  ${whatDayIsIt}`)

else if (whatDayIsIt==='friday')
console.log(message)


/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
rollthedices={}
let current='sum'
time =[]
for (let i = 0; i <=5; i++) { 
  if (i===3) break
  time.push(i)
  
} 
console.log(time)

console.log(rollthedices)

 
/* Ex.9 as
   Write a function called "howManyDays" which receives a date a parameter and should return the number of days passed since that date.
*/
let date= '27/05/2021'
let howManyDays=date.slice(0,2)
console.log(howManyDays)

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
let isTodayMyBirthday= 'monday 24'

if (isTodayMyBirthday==!'monaday 24')
console.log(`False ${isTodayMyBirthday}`)
else  
console.log(`True birthday ${isTodayMyBirthday}`)
// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
let deleteProp={
  name :'school',
  age:21
}
console.log(deleteProp)
let newdelete={}
Object.assign(deleteProp,newdelete.name='house')
console.log(newdelete)
delete newdelete.name
console.log(newdelete)
/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
/*movies()
let olderMovie=function(currentdrift){

for (let i=0; i<movies.length; i++){
 curentdrift=movies.length[i].Year
 conole.log(currentdrift)
}
}
oldermovies(currentdrift)

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

/*let countMovies=movies.length
console.log(countMovies)
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
/*let onlyTheTitles=[]

for (let i=0; i<movies.length; i++){
 curentdrift=movies.length[i].Title;
 onlyTheTitles.push(curentdrift);
 console.log(onlyTheTitles)
}
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.

*/
/*let onlyInThisMillennium =movies.length[0,1]
console.log(onlyInThisMillennium)

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
const halfTree = function(lineLength = 3, lineCharacter = "*\n"){
  let line = ""
  for (let i = 0; i < lineLength; i++){
    
    line += lineCharacter 
  }

  
  console.log(`\n${line}`)
}
halfTree()
/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
let isItPrime=function(parameter=9){
  if (parameter===9){
    console.log(`prime number is ${parameter}` )
  }

}
isItPrime()
/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies= [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

movies()
let oldermovies=function(){

  for (let i=0; i<movies.length; i++){
    movies.length[i].Year
   conole.log(movies.length[i].Year)
  }
  }
  oldermovies()





let countMovies=movies.length
console.log(countMovies)
movies()
const onlyTheTitles =function(){
let onlyTheTitles=[]
for (let i=0; i<movies().length; i++){
 curentdrift=movies().length[i].Title;
 onlyTheTitles.push(curentdrift);
 console.log(onlyTheTitles)
}
}