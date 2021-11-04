

// variables: var, let y constantes: const

let password = "welxcummer"
let imput = "welxcummer"

let result = password == imput;
// espacio más con un string entre name y lastname para que estsén separados.
console.log(result);

if (result === true){
 console.log ("successfully login");
} 

if(result === false) {
    console.log ("failed login");
    } else {
        console.log("incorrect password");
        } 


let score = 78;


// switch

let typecard = "debid card"
 switch(typecard) {
 case "debid card":
     console.log ("this is a debid card");
     break;
     
case "credit card":
         console.log("this is a credit card");
         break;
 
    default:
        console.log("no card recognized")
}


let  count = 1;

while(count< 5){
     console.log(count);
     count++;
}
//while= if 


//let name
let names = ["P","Z", "D","E"]
console.log(names.length);

for(let iX = names.length -1; iX>= 0;iX--) {
   console.log(names [iX]);
    }


    //functions
function warning (personname) {
    console.log("memory overflow");
    console.log("hard drive not detected")
    console.log("the latest gpu drivers isn´t installed")
}

warning("memory overflow");
