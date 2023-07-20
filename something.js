// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let date = new Date("2:00 PM");  
let options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", 
    hour: "2-digit", minute: "2-digit"  
};  
let str = date.toLocaleTimeString("en-us", options) 

console.log(str.substring(0, 15))
console.log(date.toLocaleTimeString("en-us", options)); 

console.log("Welcome to Programiz!");

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let date = new Date("July 29, 2002, 2:00 PM");  
let options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
};  
let str = date.toLocaleTimeString("en-us", options) 

console.log(str.substring(0, 15))
console.log(date.toLocaleTimeString("en-us", options)); 

console.log("Welcome to Programiz!");

const getTimeAMPMFormat = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0' + hours : hours;
  // appending zero in the start if hours less than 10
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
};

let d = new Date("July 29, 2002, 2:00 PM"); 
console.log(getTimeAMPMFormat(d)); // 09:59 AM
