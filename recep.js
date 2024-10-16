// node recep.js //


// const a = 50;
// let b = "Azmir Udddin"
// let married = true;

// // Condition kora holo if else diye //

// if(a === 50){
//     console.log("Atar value thik ace");
// }

// else if(b === "azmir Uddin"){
//     console.log("Tumar nam thik ace");
// }
// else if ( married !== true){
//     console.log("Tumi Sotti ei biye korco!");
// }

// else{
//     console.log("Tumar kono kicu thik nai");
// }

// ....................................................//

// Array //
// node recep.js //

// let allarray = [15,96,84,23,69,10,]

// let newarray = [...allarray]
// newarray.push(99)
// console.log(allarray);
// console.log(newarray);


// object //
// node recep.js //

//  const allobject = {
//       name : "Azmir Uddin",
//       roll : 26,
//       Years : 20,
//       Edication : "HSC",
//       skilss : "Web Developer",
//       "gram" : "Hariya",
//       80 : "hum"
//  }

//  console.log(allobject[80]);


//  let newaobject  = {...allobject}
//  newaobject.skilss = "Full Steack Developer"
//  newaobject.thana = "Sonargaon"
//  console.log(allobject);
//  console.log(newaobject);

// node recep.js//


//  Function valiable multiple//

// function muliple (num1,num2){
//     return num1 * num2
// }
// const finalvalue = muliple(5,10)
// console.log(finalvalue);


// const incriment = (num1 = 101, num2 = 99) => {
//     return num1 + num2
// }
// const incrementvalue = incriment()
// console.log(incrementvalue);



// node recep.js//
// Templete string//

// const allobject = {
//           name : "Azmir Uddin",
//           roll : 26,
//           Years : 20,
//           Edication : "HSC",
//           skilss : "Web Developer",
//           "gram" : "Hariya",
//           80 : "hum"
//      }


// let stringtemplte = `My Name ${allobject.name} my Gram ${allobject.gram} ami sob some ${allobject[80]} boli `
// console.log(stringtemplte);


// node recep.js//

// Array Methord Filter, map,foreach,find//

// let arrayofobject = [
//     { name: "Laptop", price: 56000, color: "black", brand: "hp", ram: "16gb" },
//     { name: "Mobile", price: 26000, color: "white", brand: "Redmi", ram: "8gb" },
//     { name: "Desktop", price: 40000, color: "blue", brand: "hp", ram: "8gb" },
//     { name: "Tablet", price: 22000, color: "black", brand: "Iphone", ram: "6gb" },
//     { name: "Watch", price: 6500, color: "black", brand: "bangladeshi", ram: "" },
//     { name: "Tv", price: 42000, color: "black", brand: "LAD", ram: "" }

// ]

// let allname = arrayofobject.map(product => product.name)
// console.log(allname);

// node recep.js//
// price gula find korbo //

// let find = arrayofobject.find(price => price.price < 45000)
// let finalresult = find.price
// console.log(finalresult);


// node recep.js//
// price gula filter korbo //

// let pricefilter = arrayofobject.filter(filter=> filter.price > 38000)
// console.log(pricefilter);

// let colorfilter = arrayofobject.filter(colorsearch => colorsearch.color.includes("b"))
// console.log(colorfilter);


// node recep.js//
//  arry and object Destructuring//

//  let azmir = [58,41,54,23,9,66,45,22,14,]

//  let [num,,,num2]=  [58,41,54,23,9,66,45,22,14,]
//  console.log(num,num2);


// node recep.js//

// let objt = {
//     nam:"Azmir",
//     thana: "Sonargaon",
//     selary : 20000
// }

// let {thana,selary = 25000} = objt
// console.log(thana,selary);


// json//
// node recep.js//

// let objt = {
//     nam:"Azmir",
//     thana: "Sonargaon",
//     selary : 20000
// }

// let string = JSON.stringify(objt)
// let parse = JSON.parse(string)
// console.log(parse);
// console.log(objt);

// node recep.js//
// object er kews and value//

// let objt = {
//     nam:"Azmir",
//     thana: "Sonargaon",
//     selary : 20000
// }

// let man = Object.keys(objt)
// console.log(man);
// let man = Object.values(objt)
// console.log(man);



// node recep.js//
// objext copy and new object add//

let arrayofobject = [
    { name: "Laptop", price: 56000, color: "black", brand: "hp", ram: "16gb" },
    { name: "Mobile", price: 26000, color: "white", brand: "Redmi", ram: "8gb" },
    { name: "Desktop", price: 40000, color: "blue", brand: "hp", ram: "8gb" },
    { name: "Tablet", price: 22000, color: "black", brand: "Iphone", ram: "6gb" },
    { name: "Watch", price: 6500, color: "black", brand: "bangladeshi", ram: "" },
    { name: "Tv", price: 42000, color: "black", brand: "LAD", ram: "" }
]
//  let newobj ={ name: "Laptop", price: 56000, color: "black", brand: "hp", ram: "16gb" }

//    let newobjcreate = {...arrayofobject,newobj}
//  console.log(newobjcreate);
//  console.log(arrayofobject);

// node recep.js//
// let finalmap = arrayofobject.map(lopp => lopp.ram) 

//   for(let man of finalmap){
//    let hi =  man === "" ? "N/A" : man
//    console.log(hi);
//   }

// let number = 100;
// let result = typeof number + ""
// console.log( typeof result);

// let string = "200"
// console.log( typeof + string);



//  localStorage data save///


// localStorage.setItem('Azmir',5656);

  let allwork = () =>{
    let keyid = document.getElementById("keyid")
    let keyidvalue = keyid.value
    console.log(keyidvalue);
    let valueid = document.getElementById("valueid")
    let valueidvalue = valueid.value
    console.log(valueidvalue);
    keyid.value = ""
    valueid.value = ""
    if(keyidvalue && valueidvalue){
        localStorage.setItem(keyidvalue,valueidvalue)
    }
    
  }


//   localStorage.setItem("hi",[55,56,566,56,])
//   localStorage.setItem("hi",JSON.stringify([55,56,566,56,]))

let person = {nam:"azmir",selary:200}

 let azmir =  localStorage.setItem(JSON.stringify(person),"20")
 let final = localStorage.setItem(JSON.parse(azmir))




