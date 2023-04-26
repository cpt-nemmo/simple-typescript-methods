let array: Array<string>
array = ['1', '2', '3']


const numbers: ReadonlyArray<number> = [0, 1, 2, 3, 4]
numbers[0] // we can only read
// numbers.push()  we can't change the massive because of ReadonlyArray

type TypeArray = [number, string, null]
const newArray: TypeArray = [1, '2', null] // tuple