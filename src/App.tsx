import React from "react";
import logo from "./logo.svg";
import "./App.css";

// JSON
import Data from "./data.json";
import TestComponent from "./TestComponent";
type USERS = typeof Data;

const name = "hello";

let username = "hello";
// let username:string = "hello";
let dummyNum = 0;
// let dummyNum: number = 0;
let bool = true;
// let bool:boolean = true;
let array1 = [true, false];
let array2 = [0, 1, "hello"];

interface NAME {
  firstname: string;
  lastname: string | null;
  age?: number;
}
let nameObj: NAME = {
  firstname: "hello",
  lastname: null,
};

const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 35,
  city: "Fukui",
  username: "yamamoto",
  password: "secret",
};

// Union Types
let value: boolean | number = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "test"];

// Literal Types
let company: "Facebook" | "Google" | "Amazon";
company = "Facebook";

let memory: 256 | 512;
memory = 512;

// typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";
let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性
const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
// const comp4: "test" = comp3; // error

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};
// funcConp1 = funcComp2; // error
// funcConp2 = funcComp1; // error

// Generics(ジェネリックス)
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" }; // error
const gen2: GEN<number> = { item: 12 };

interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<number> = { item: 0 };

function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);

function funcGen1<T extends string | number>(props: T) {
  return { value: props };
}
const gen8 = funcGen1("hello");
// const gen9 = funcGen1(true); //error

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen3({ price: 100 });

const funcGen4 = <T extends Props>(props: T) => ({ value: props.price });

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text={"Hello from App"} />
      </header>
    </div>
  );
};

export default App;
