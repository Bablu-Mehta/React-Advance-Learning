//primitives

let age: number = 24;

age = 12;

let username: string;

username = "Bablu";

let isInstructor: boolean;

isInstructor = true;

//more complex types:

let hobbies: string[];

hobbies = ["chess", "cricket"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "bablu",
  age: 24,
};

let people: Person[];


//Type Inference

// let course = "React - The Complete Guide."

// course = 1234; 

//typescript tries inference types as many as possible, means which type is where without use explaining types to it. 

//Union Types

let course: string | number = "React - The Complete Guide."

course = 1234; 