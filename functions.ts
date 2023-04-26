// classic function with typed return
type TypeChannelReturn = {
    name: string
}


function getChannel(name: string): TypeChannelReturn {
    return { name }
}

// arrow typed function

const getChanelName = (name: string): TypeChannelReturn => {
    return { name } 
}

// all typed arrow function
type ArrowTypedFunc = (name: string) => TypeChannelReturn

const arrowFuncToGetChanelName: ArrowTypedFunc = (name) => {
    return { name }
}

// rest operator
const getNembers = (...nambers: number[]) => {
    return numbers
}

// overloaded functions - when we can add different parameters in func
function getCar(name:string): string
function getCar(name:string, price:string): string

function getCar(name:string, price?:string): string {
    return price ? `Name ${name} Price ${price}` : `Name ${name}`
}

const car = getCar('bmw')
const car1 = getCar('bmw', '100000')



