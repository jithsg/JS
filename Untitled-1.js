// console.log("%cHello World there","color:blue; font-size:40px");
//this is a comment

/* this is
a multiline
comment 
*/

/*this is a multiline comment in single line*/

// var petDog = "Rex";
// console.log(petDog);
// var petCat = "Pepper";
// console.log(petCat);
// console.log("my pet cat name is "+ petCat);
// console.log("my pet dog name is", petDog);
// console.log(2+2);
// console.log(2/2);
// console.log(2*2);
// console.log(2>2);

// var currentTime = 17;

// console.log(currentTime>10 && currentTime<18);

// var result = 50;
// if (result>40){
//     console.log("you passed the test");
// }
// else{
//     console.log("you failed the test");
// }

// var place = "first";

// if (place=="first"){
//     console.log("gold");
// }
// else if (place=="second"){
//     console.log("silver");
// }
// else if (place=="third"){
//     console.log("bronze");
// }
// else{
//     console.log("no medal");
// }

// switch(place){
//     case  "first":
//         console.log("gold");
//         break;
//     case "second":
//         console.log("silver");
//         break;
//     case "third":
//         console.log("bronze");
//         break
//     default:
//         console.log("no medal");
// }


// if (age>=65){
//     console.log("You get your income from your pension")
// }
// else if (age<65 && age>=18){
//     console.log("Each month you get a salary")
// }
// else if (age<18){
//     console.log("You get an allowance")
// }
// else{
//     console.log("The value of the age variable is not numerical")
// }

var age =10;
switch(true){
    case age>=65:
        console.log("You get your income from your pension")
        break;
    case age<65 && age>=18:
        console.log("Each month you get a salary")
        break;
    case age<18:
        console.log("You get an allowance")
        break;
    default:
        console.log("The value of the age variable is not numerical")
        break

}