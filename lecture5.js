// URL Structure:
// https:// --> Protocol
// www.amazon.in --> Hostname
// /electronics --> Path    
// /b --> Subpath
// /?ie=UTF8&node=976419031&ref_=nav_cs_electronics --> Query Parameters

// [
//     "node",
//     "file.js",
//     "add",
//     "2",
//     "5"
// ]
// const functionName = process.argv[2]; // This will be "add" or "multiply" based on the command line argument.
// const num1 = Number(process.argv[3]); // This will convert the string argument to a number.
// const num2 = Number(process.argv[4]); // This will convert the string argument to a number.

// const [ , , functionName, num1, num2 ] = process.argv;
// const a = Number(num1);
// const b = Number(num2);

// if (functionName === "add") {
//     console.log("Result:", a + b);
// } 
// else if (functionName === "multiply") {
//     console.log("Result:", a * b);
// } 
// else {
//     console.log("Unknown function");
// }


const http = require("http");

const server = http.createServer((request, response) =>{
    console.log("Received request:", request.url);
    response.end("Hello, this is a response from the server!");
    });
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});