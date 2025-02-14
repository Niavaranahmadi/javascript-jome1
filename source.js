// console.log("Hello, World!");


// console.log("hello good morning my neighbors");

// console.log("salam");


// console.log("mallah");


// oprators 

// console.log(4+5);
// console.log("4+5");
// console.log(12-5);
// console.log(45*6);
// console.log(3**2);
// console.log(20/6);
// console.log(10%3);


// variable 

// let a = 12;
// console.log(a);
// console.log("a");


// let ali = 40;
// ali = ali+12;
// console.log(ali);



// let a = 12;
// let b = 10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);




// var a = 12;
// a = 10;
// console.log(a);



// const a = 12;
// console.log(a);


// const a = 12;
// a = a+5;
// console.log(a);



// datatypyes 
/*
number => let a = 4;
string => const a = "ali";
object => const a = {name : "mohammad" , family : "mohammadi"}
array => const colors = ["blue" , "green" , "yellow"]
boolean => True , False -> let a = 4<5;
*/


// const num = 45;
// console.log(typeof num);
// console.log(num);


// const text = "hello good morning.";
// console.log(typeof text);
// console.log(text);


// const info = {name : "ali" , family : "mallah" , age : 23};
// console.log(info);
// console.log(info["name"]);
// console.log(info["age"]);
// console.log(typeof info);


// const colors = ["blue" , "green" , "yellow" , "gray"];
// console.log(typeof colors);
// console.log(colors);


// const a = 4<5;
// console.log(a);


/*
equal : ==
equal : ===
not equal : !=
not equal : !==
greater than : >
greater than equal : >=
less than : <
less than equal : <=
*/


// let a = 4;
// let b = "4";
// console.log(a==b);
// console.log(a===b);



// let a = 4;
// let b = 4;
// console.log(a===b);


// let a = 4;
// let b = "4";
// console.log(a!=b);
// console.log(a!==b);



// const a = 45;
// const b = 12;
// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);




// let a = 5;
// let b = 42;
// let c = 50;
// if (a>b){
//     console.log("yess");
// }else if (b<c){
//     console.log("yep");
// }else if (a+b==c){
//     console.log("no");
// }else{
//     console.log("error");
// };







// let a = "ali";
// switch (a){
//     case "ali":
//         console.log("yes");
//         break
//     case "sara":
//         console.log("no");
//         break
//     default:
//         console.log("error");
//         break
// }



// let form = document.getElementById("form");
// form.addEventListener("submit" , function(){
//     let region = document.getElementById("region").value;
//     switch (region){
//         case "iran":
//             alert("welcome");
//             break
//         case "russia":
//             alert("welcome");
//             break
//         default:
//             alert("this site cant reach in your region...")
//             break
//     }
// })



// let form = document.getElementById("form");
// form.addEventListener("submit" , function(event){
//     event.preventDefault()
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     if (age>=18){
//         document.getElementById("result").innerHTML = "welcome " + name; 
//     }else{
//         document.getElementById("result").innerHTML = "error";
//     }
// });





// let a = 45;
// let b = 20;
// let c = 65;
// if (a+b==c && a>c){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// if (a+b==c || c<a){
//     console.log("yes");
// }else{
//     console.log("no");
// };





let username = "drmallah";
let passworduser = "professormallah";
let form = document.getElementById("form");
form.addEventListener("submit" , function(event){
    event.preventDefault();
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    if (username == user && passworduser == password){
        document.getElementById("result").innerHTML = "welcome doctor professor mohandes mallah jan...";
    }else{
        document.getElementById("result").innerHTML = "inja fqt doctore ma mitune vared beshe, lotfan mozahem nashid...";
    }
});










