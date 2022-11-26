class AbstractCountry {
    constructor(){
        if(constructor.target === AbstractCountry){
            throw new TypeError("You can't initialize abstract classes.")
        }
    }
}

const country = new AbstractCountry
