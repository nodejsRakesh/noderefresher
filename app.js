const fs=require("fs");
const validator=require("validator");
const utils=require("./utils");
const add=require("./notes");
const sum=add(8,9);
console.log(sum);
//fs.writeFileSync("notes.txt","this is the my first node code");
fs.appendFileSync("notes.txt","i Love my country and there laws!!! ");
console.log("my name is karan");
console.log(utils);
console.log(validator.isEmail("rakesh@.com"));
console.log(validator.isURL("http://medial.com"));   
console.log(process.argv[2]);
const command=process.argv[2];
if(command==="add"){
    console.log("adding note")
}
else if(command==="remove"){
console.log("removing notes");
}
console.log(process.argv[3]);

