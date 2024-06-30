const path = require('path');

const a1 = path.basename('c:\\temp\\myfile.txt');//output - myfile.txt
console.log(a1)
const a2 = path.dirname('c:\\temp\\myfile.txt');//output - c:\temp
console.log(a2)
const a3 =path.extname(__filename)//output - .js
console.log(__filename , a3)//output - C:\Users\Dharmesh\OneDrive\Desktop\CODING ZINDGI\backend development by pw (vishva mohansir)\node.js\p2_pathmodule.js .js