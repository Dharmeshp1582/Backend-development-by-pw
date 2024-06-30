/**
 * Console-log
 */

var emp_name = 'Ankita',
    emp_depts={
        dept1:'sales',dept2:'Account'
    };

    console.log('Name:%s'+'\n'+'Departments:%j',emp_name,emp_depts);
/**
 * console-info
 */
var emp_name = 'Ankita',
    emp_depts={
        dept1:'sales',dept2:'Account'
    };
    console.info('Name:%s'+'\n'+'Departments:%j',emp_name,emp_depts);

/**
 * console-error
 */

var code = 401
console.error("Error!!",code)

/**
 * console-warn
 */

var fs = require('fs');
fs.open("input.dat","I",function(err, fs){
    if(err){
        console.warn(err);
    }else{
        console.log("file opening successfull");
    }
});