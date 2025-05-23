const { FPB, KPK, Turunan, Integral } = require('./MatematicalLibrary');

console.log("=== PEMANGGILAN LIBRARY MATEMATIKA ===");
console.log("FPB(60, 45):", FPB(60, 45)); 
console.log("KPK(12, 8):", KPK(12, 8));   

console.log("\nTurunan([1, 4, -12, 9]):", Turunan([1, 4, -12, 9]));


console.log("\nIntegral([4, 6, -12, 9]):", Integral([4, 6, -12, 9]));