import {error} from "console";
import fs from "fs";
import path from "path";

const filePath = 'D:\\Summer\\NodeJS\\Lecture\\file.txt';

const dynamicPath = path.join('D:','Summer', 'NodeJS', 'Lecture', 'file.txt');
console.log("Dynamic Path:", dynamicPath);

fs.readFile(filePath, 'utf8', (err, data) => {
    console.log(data);
    
});

const absolutePath = path.resolve('file.txt');
console.log("Absolute Path:", absolutePath);