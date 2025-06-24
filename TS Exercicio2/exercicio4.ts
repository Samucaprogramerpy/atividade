function processarID (id : number | string){
    if (typeof id == "string"){
        console.log(id.toLowerCase())
    } else if (typeof id == "number"){
        console.log(id * 2);
    }else{
        console.log("ERROR");
    }
}

processarID(2);
processarID("KALKASD")


const nomes = ["João", "Maria", "Lúcia"];
nomes.forEach( function (s){
    console.log(s.toUpperCase());
})