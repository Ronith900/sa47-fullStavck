console.log("Hello World!");
var x=1;
console.log(typeof(x));
x="ronith";
console.log(typeof(x));
console.log(x);

function make1(x,y){
    console.log(x);
}

function make2(x,y,z){
    make1(x+1);
    console.log(typeof(x));
    if(x==null){
        console.log("x is null!");
    }

    if(y==null){
        console.log("y is null and undefined !");
    }

    console.log(y);
    console.log(z);
}

make2(null,null,7);
make2('xxx',null,7);
//make2(xx,null,7);

function make3(fn1){
    console.log(fn1); // it will print metadata!
    fn1(1); // it will print Hello World!
}

function fn1(){
    console.log("Hello World!");
}

make3(fn1);

str1 = "Apple";
console.log(str1);
str2 = 'An' + str1

console.log(str1);
str2 = `   xxx An ${str1}
           \n test gello!
       `
console.log(str2);

var x = true;
var yy = false;

if(x){
    console.log("true")
}

if(!yy){
    console.log("false")
}

x=100;

function make5(){
    let x =10;
    console.log(`x inside > ${x}`);
}

make5();
console.log(`x from outside >${x}`);

var fruit=['Apple',false,'Orange',1,'Durian'];
console.log(fruit[0]);
console.log(fruit[1]);
fruit.push('PineApple');
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.unshift(1);
console.log(fruit);
fruit.unshift('Watermelon');
console.log(fruit);
fruit.shift();
console.log(fruit);

fruit.sort();
console.log(fruit);

var numbers=[4,7,8,9,10]

numbers.sort(function(a,b){
    console.log("a" +a);
    console.log("b" +b);
    console.log(b-a);
    return b - a;
})
console.log(numbers);

var numbers1 = [4,7,8,9,1];
var numbers2 = [4,77,81,9,1];

var result = numbers1.concat(numbers2);
console.log(result);

result.sort(function(a,b){return a - b;})
console.log(result);

result.sort(function(a,b){return b - a;})
console.log(result);


var person= {

    firstName :'Z',
    lastName : 'K',
    age : 30,
    'address' : 'bp',
    gender : 'M',
    postalcode:121212
}

console.log(person.firstName);
console.log(person.address);
console.log(person.age);
console.log(person['age']);
person.age = 50;
console.log(person.age);
console.log(person.postalcode);
delete person.postalcode;
console.log(person.postalcode);
console.log(34);

function throwError(){
    throw new Error('This is an error');
}

try{
throwError();
}catch(e){
console.log(e);
}finally{
    console.log("finally execute");
}


var x5=2;

switch(x5){
    
    case 1:
    console.log('1');
    break; 
    case 2:
    console.log('2');
    break; 
    case 3:
    console.log('3');
    break; 
    default:
    console.log("default switch");


}

var t=[1,2,3,4,5,6,7,1,2,2,1,1,2,1994];
for(var i=0;i<t.length;i++){
    console.log(t[i]);
}

var months = ['Jan','Feb','Mar','Apr','May'];
console.log(months);
months.splice(4,2,'June','October');
console.log(months);

function person2(fn,ln,age,gender){
    this.fn=fn;
    this.ln=ln;
    this.age=age;
    this.gender=gender;
}

var p2 = new person2('Ronith','N',24,'M');
console.log(p2.age);
