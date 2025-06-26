let array : (string | number | boolean) [] = [1, "olá", false];

const num1 = array[0] as number;
console.log("Número:", num1);

const str1 = array[1] as string;
console.log("str:", str1);

const bool1 = array[2] as boolean;
console.log("Boolean:", bool1);