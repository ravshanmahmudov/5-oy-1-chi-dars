// 1chi masalla
// Quyidagi kodni tahlil qiling va uning qanday ishlashini tushuntiring:
// var a = 1;
// function outer() {
//   var b = 2;


//   function inner() {
//     var c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// inner()
// }
// outer()



// var a = 1;: Global scope bolgani uchun   a ni 1 ga tenglaydi


// kodni ishlashi

// outer  funksiyasi chaqiriladi va
// outer ichida b 2 ga tenglanadi keyin inner funksiyasi chaqiramiz   inner ichida c bolganda 3 ga tenglanadi

// console ga a ni chiqarganimizda  global bolgani uchun a  1 chiqadi 
// console ga b ni  chiqarganimizda outer funksiyada  b  2 chiqadi 
//  console ga c ni  chiqarganimizda  funksiyda  c  3 chiqadi
// javobi
// 1
// 2
// 3
// chiqadi


// 2chi massala


// Quyidagi kodni yozing va uning natijasini tushuntiring:

// console.log(x);
// var x = 5;
// console.log(x);

// bu kodimizda hosting xodisasi bilan var tepaga kotariladi lekin javobimiz undifand qaytaradi lekin javobi xam chiqadi 
// ozgaruvchilarimz elon qilingan joyimiz javaScript ishga tushganda keyin  ozgaruvchilarimiz tepaga kotariladi

// javobi
// undefined
// 5
// boladi

// 3chi masalla

// Quyidagi kodni yozing va uning natijasini tushuntiring:

// console.log(y);
// let y = 10;
// console.log(y);


// Bu kodimizni JavaScript da ishlata olmaymiz chunki let bilan elon qilsak unga qiymat bermasdan oldin uni consolga chiqara olmaymiz bizga xatolik qaytaradi. 


// 4chi massala

// Quyidagi kodni yozing va uning natijasini tushuntiring:
// {
// console.log(z);
// let z = 15;
// console.log(z);
// }

// let blok scop bolgani uchun u hostinga tushmaydi va shung uchun bizaga hatolik qaytaradi chungi let const ni qiymat bermasdan ularni consolga chiqarib bolmaydi hatolik qaytaradi

//   5 chi massala 

// Quyidagi obyekt uchun `for...in` va `for...of` looplarini yozing va ularning qanday ishlashini tushuntiring:

// const student ={
// name:"alice",
// age:25,
// course:"computer"
// };
// for(let key in student){
//     console.log(key+":"+student[key]);
// }
// const grades =[90,85,88];
// for (let grade of grades){
// console.log( grade);
// }

// for..in  obyektni kalitlari va qiymatini chiqarish uchun ishlatiladi   for ..of esa  arry qiymatlarini chiqarish uchun ishlatiladi 

// 6 chi massala 

// Quyidagi kodni yozing va uning natijasini tushuntiring. Kodda `scope`, `hoisting`, `TDZ`, `for...in` va `for...of` tushunchalari qo'llangan: Har bir natijani yozing va nima uchun shunday ekanligini tushuntiring.
// console.log("Task 1:");
// function hoistExample(){
// console.log(a);
// var a=20;
// console.log(a);
// }
// hoistExample();
// console.log("Task 2:");
// function scopeExample(){
// var x= 10 ;
// if(true){
// let  y =20;
// const z=30 ;
// console.log(x);
// console.log(y);
// console.log(z);
// }
// console.log(x);
// }
// scopeExample()
// console.log("Task 3:");

// const obj ={name:"john", age:30};
// for(let prop in obj ){
// console.log(prop+":"+obj[prop]);

// }
// const arr =[10,20,30];
// for(let value of arr){
// console.log(value);
// }

// javobi



// Taks 1 da  bunda hosting boladi birinchi javob undefined qaytaradi  2chi  javob esa 20 chiadi chunki var tepaga kotariladi 

// Taks 2 da  Bu var, let, va const   x funksiyada var bilan e'lon qilingan  uning mavjudligi funksiyaning  if yordamida  chiqarish mumkun 10, 20, 30, 10, chiqadi 
// Taks 3 da esaa kalit va valusi chiqadi keyin esa qiymati chiqariladi for..in va for..of


// 1chi masala

// let words = ["apple", "banana", "orange", "grape", "kiwi", "pear"];
// const res = words.filter(word => word.length > 5);

// constresults = res.map(word => word.charAt(0).toUpperCase() + word.slice(1));

// console.log(constresults );

// 2chi masalla


// function a (arr) {

//     const b = arr.find(k => k.age > 20);
    
//     if (a) {
//         const c = b.name.charAt(0).toUpperCase() + b.name.slice(1);
//         return c;
//     } else {
//         return "Topilmadi";
//     }
// }
// const arr = [
//     { name: 'Johongir', age: 18 },
//     { name: 'Jamshid', age: 22 },
//     { name: 'Dilshod', age: 19 },
//     { name: 'Alisher', age: 29 }
// ];

// console.log(a(arr));

// 3 chi masalla

// function arr(products) {
//     const b = a.filter(p => p.seri > 100);
//     const t = b.reduce((acc, p) => acc + p.seri, 0);
    
//     return t;
// }
// const a = [
//     { name: 'narx', seri: 120 },
//     { name: 'narx2', seri: 80 },
//     { name: 'narx3', seri: 150 },
//     { name: 'narx4', seri: 90 }
// ];

// console.log(arr(a));

// 5chi masallla

// let a = [1, 2, 3, 4, 5]
// function sqrtArray(arg) {
// let result = arg.map(function(value) {
// return value ** 2;
// })
// console.log(result);
// }
// sqrtArray(a); 


// 6chi masalalar


// let arr = [1400, 5000, 1000, 4000];
// function salary(arr) {
// let result = arr.map(function(value) {
// if (value>= 2000) {
// value = Math.floor(value * 1.1)
// }
// return value
// })
// return result;
// }
// console.log(salary(arr));

// 7chi massala


// let students = [
//     {name: "Abduraxmon", yoshi: 12, ball: 10},
//     {name: "Abdurasul", yoshi: 17, ball: 50},
//     {name: "Toxir", yoshi: 13, ball: 40},
//     {name: "Zafarifjon", yoshi: 43, ball: 90},
//     {name: "Shaxzod", yoshi: 20, ball: 85},

//     function findStudent(arr) {
//         let result
//         arr.find(function(value) {
//         return value.ball >= 88
//         })
//         let success = arr.filter(function(value) {
//         return value.ball >= 80
//         })
//         console.log(success);
//         return [result.name, result.yoshi];
//         }
//         console.log(findStudent(students));

// yozuvga oid masalalar 


// 1chi massala



// function toupper(str) {
//     return str.toUpperCase();
// }
// console.log(toupper("salom"));


// 2chi massala


// function includes(str, substring) {
//     return str.includes(substring);
// }
// console.log(includes("world")); 

// 3chi massala

// function JavaScrip(str) {
//     return str.replace();
// }
// console.log(JavaScrip("frontend")); 



// 4chi massala



// function revers(str) {
//     return str.split(" ").reverse().join(" ");
// }
// console.log(revers("hello world from JavaScript"));



// 5chi massala


// function trimString(str) {
//     return str.trim();
// }

// console.log(trimString("   hello   "));