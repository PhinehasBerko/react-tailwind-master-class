type Person = {
    name: string
}

// Annotations are used to specify the data type of a 
// variable, parameter, function return value, and other
// types of values

// it helps catch errors early in development

export const person: Person = {
    name: 'Phinehas'
}

// Annotation by:
// Strings
export const stringValue: string = 'This is a string';

// Numbers
export const numValue: number = 234;

// Boolean
export const boolValue: boolean = true;

// Type Inference
// Type inference is a feature in TypeScript that allow
// the compiler to automatically determine the type of a 
// variable based on its value

export const inferType = 'string value';

// Return Annotation 
export const double =( x:number): number => x * x;

// Return Void
// Void is used when the function does not have a return value

export const voidFunc = (params: string) : void  => {
    console.log(`This function only log ${params} to the console but doesn't return a value`)
}

// Never
// is used to indicate that a function will ot return anything,
// or that a variable can never have a value. The never type is
// useful for indicating that certain code paths should never be
// reached, or that certain values are impossible.
// it can help catch errors at compile-time instead of runtime.

// When to use Never
// A function that always throws an error
function throwError (msg: string): never {
    throw new Error (`an error occured ${msg}`)
}
// A function that has an infinite loop 
function infiniteLoop (): never {
    while (true) {
        throw new Error ('an error occured')
    }
}
// A variable that can never have a value
// const nevValue: never;
// nevValue = infiniteLoop();

// Arrays Types
// Arrays in TypeScript are a type of object that stores multiple values of the same data type.

// Array Type by [] Notation
export const numberArr : number[] = [1,3,5,6,9];

// Array Type by Array<data type> Notation
export const AnotherArr : Array<number> = [4,5.3,25.2];

// Array Type by (data type 1 | data type 2)[] Notation
export const naArray = [1,3,4,5.5,'2.2.']

// Multi Dimensional Array

// A multi-dimensional array is an array that contains other arrays as its elements.
// Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays
// but with nested square brackets.

// Example

export const multiArray: number[][] = [
[2,4,5],
[4,3,5,2]
]

// Objects
// An object in TypeScript is a structured data type that represents a collection
// of properties, each with a key and an associated value.
// The properties of an object can have specific types, and the object itself can be annotated
// with a type, often defined using an interface or a type alias. 

// Example 

interface PersonObj {
    name : string,
    age : number
}

export const personOBJ: PersonObj = {
    name: 'Phinehas',
    age: 23
}

export const AnotherPerson: {firstName: string, lastName: string, age: number} = {
    firstName :'Victor',
    lastName : 'Nyantakyi',
    age :20,

}

// Object as function return value

export function ObjectFunction(): {name: string; location: string} {
    return {
        name:'OBJ',
        location:'Ghana'
    }
}


// export function funcName ():void {

// }

export const funcName = (): void => {}

// Type Aliases
// A type alias is a way to create a new name for an existing type.
// It allows you to define a custom type that refers to another type
// and give it a more meaningful or descriptive name.

// Type aliases are defined using the type keyword, followed by the 
// name of the alias, an equal sign (=), and the type it refers to.

export type User = {
    name: string;
    age: number;
    location: string[]
}

// Function with User as a type alias and also a return type of string
export const printUserInfo =(user : User): string => {
    return `Name is ${user.name} from ${user.location} and age ${user.age} `
}

// Function with User as a type alias and also a return type of User
export const printUserInfo2 =(user : User): User => {
    return {
        name: user.name,
        location: user.location,
        age: user.age
    }
}

// Intersection Types
// An intersection type is a way to combine multiple types into a single
// type  that includes all the properties and methods of each constituent 
// type.
// An intersection type is denoted by the & symbol.

type  Employee = {
    id: string;
    career : string;
}

type UserAndEmployee = User & Employee;

export const worker: UserAndEmployee = {
    name: 'Phinehas',
    age: 24,
    location : ['Kumasi'],
    id: 'RT001',
    career:'Frontend'
}

// Unions
// Unions  are used to declare a type that can have one of several possible
// types. Unions are useful when we want to allow a variable or parameter
// to accept multiple types 

// The syntax for defining a union type in TypeScript uses the 
// pipe symbol (|)

export const unionType : (number | string | boolean) = 12;

// Literal Types
// Literal types allow you to specify a value that can only be one specific
// literal value.
// This means that a variable with a literal type can only have one specific
// value and no other.

// string literal types
export let color : 'red' |'blue' | 'green';

// Numeric Literal Types
export let numberLiteral : 1 | 2 | 3;

// Boolean Literal Types
export let isTrue : true | false;

// Tuples
// Tuple is a type that represents an array with  a fixed number of elements,
// where each element can have a different type.