function check (a: string | number){
    if (typeof a === 'string'){
        console.log("O a é do tipo string");
    } else if (typeof a === 'number'){
        console.log("O tipo a é do tipo number");
    };
}

check(1);