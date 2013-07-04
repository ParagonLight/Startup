#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
var out = "";
var num = Math.abs(-1);
var num = 100;
var integer = 2;
while(num > 0){
    var prime = isPrime(integer);
    if(prime){
        num --;
        out+=integer;
        if(num > 0){
            out+=",";
        }
    }
    integer ++;
}

function isPrime(value){
    var i;
    for(i = 2; i < value; i++){
        var n = value%i;
        if(n === 0){
            return false;
        }
    }
    if(i == value){
        return true;
    }
}

//console.log(num);
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
