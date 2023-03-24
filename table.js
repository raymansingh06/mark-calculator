let fs = require("fs");
const { Readline } = require("readline/promises");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function largestPerimeter(arr){
    let sortArr = arr.sort((a,b)=>b-a);
    for(let i=0;i<sortArr.length-2;i++){
    let a = sortArr[i];
    let b= sortArr[i+1];
    let c = sortArr[i+2];
    if(a<c+b){
    return a+b+c;
    }
    }
    return 0
    }
    
    let testcase = parseInt(readLine());
    for(let i=0;i<testcase;i++){
    let arr = readLine().split(" ").map(Number);
    console.log(largestPerimeter(arr));
    }