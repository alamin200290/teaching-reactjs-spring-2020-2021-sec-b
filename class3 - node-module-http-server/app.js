//let student = require('./student');
//const s1 = student();
//console.log(s1.name);

const path  = require('path');
const mysql = require('mysql')
const student = require('student')
let c = "C:\Windows\\\System32//\cmd.exe";

//console.log(path.dirname(c));
//console.log(path.extname(c));
console.log(path.normalize(c));