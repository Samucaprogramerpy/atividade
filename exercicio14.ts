function verdadeiro(num : number) : boolean{
    if (typeof num !== 'number'){
        return false;
    }else{
        let verify = num % 2;
        if (verify !== 0){
            return true
        }else{
            console.log("Esse numero é par")
        };
    };
}

verdadeiro(3);