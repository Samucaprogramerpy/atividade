function NumerosLetras(i: string | string[]): number {
  if (typeof i === "string") {
    return (i as string).length;

  } else {
    
    return (i as string[]).reduce((sum, str) => sum + str.length, 0);
  }
}


console.log(NumerosLetras("TypeScript"));