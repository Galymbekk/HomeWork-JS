let a=9, b=10, c=12;
let isStudent = true;
let isAlumni =true; //выпускник немесе түлек
let san = 0; //false

console.log("San: ", !san); //San: true

if(a=""){
    console.log("Бос жол");
}
else{
    console.log("а-да мән бар");
}

console.log(!isStudent); //false


if(!isStudent && !isAlumni){
    console.log("Сізге мектеп қабырғасына кіруге болмайды");
}
else if(isStudent || isAlumni){
    console.log("Сізге зеленый цвет!");
}

// == (тең)
console.log(a==b); // true

//!= (тең емес)
console.log(a!=b); //false

//>
console.log(a>b); //false

//<
console.log(a<b); //false

//<=(үлкен немесе тең)
console.log(a>=b); // 9>=10 false

//>=(кіші немесе тең)
console.log(a<=b);// 9<=10 true

// &&(және) екі шарттың екеуі де true болған жағдайда, true қайтарады
console.log((a>b) && (c>a)); // 9>10(false) 12>9(true) => false

// || (немесе) екі шарттың кемінде біреуі ғана true болған жағдайда, true қайтарады
console.log((a>b) || (c>a)); // 9>10 (false) 12>9(true) => true


//Күрделі өрнек
let age=20, hasTicket = true, isVip = false;

if((age>=18 && hasTicket) || isVip){
    console.log("Сізге кешке кіруге болады!");
}
else{
    console.log("Сізге кешке кіруге тыйым салынады!");
}

//Нәтиже: Cізге кешке кіруге болады!

// 12<=x<=45 Практика 1
let agee = 11

// alert((agee>=12) && (agee<=45));

// 20<=x<=50 true Практика 2 

let n=21

alert((n>=20) && (n<=50) && (n % 2==0))


