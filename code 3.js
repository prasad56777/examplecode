//Write a program to check if two strings are a rotation of each other?
function strrotation(str1,str2){
    if (str1.length!==str2.length || str1.length==0){
        return false;
    }
    const Concatenatestr=str1+str1;
    if(Concatenatestr.includes(str2)){
        return true;
    } 
    return false;
}
let s1="abcde";
let s2="deabc";
console.log(strrotation(s1,s2));

