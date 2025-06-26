interface Car{
    make : string;
    model : string;
}

type bus = {
    make : string;
    model : string;
    playloadcapacity : number;
}


type vechile = Car | bus;
