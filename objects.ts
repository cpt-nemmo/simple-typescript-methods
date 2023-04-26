type TypeUser = {
    name: string
    age: number
}


type TypeAddres = {
    city: string
    country: string
}

const user: TypeUser = {
    age: 20,
    name: 'Yakov'
}

const addres: TypeAddres = {
    city: 'SPB',
    country: 'Russia'
}

let common: TypeAddres & TypeUser

common = { ...addres, ...user }