import React, { useState, useEffect } from 'react';

// INTRO - HOW TO CREATE COMPONENT
type ProfileProps = {
  name?: string; // boolean, object, number. Array<>
  age?: number;
};
export function Profile({ name = 'Top', age = 12 }: ProfileProps) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
}

export function Example1() {
  // infer type with primitive by default
  const [bool, setBool] = useState(false);
  const [count, setCount] = useState(0);

  const [boolOrNum, setBoolOrNum] = useState<boolean | number>();

  return (
    <div>
      <p>Ex 1: Primitives</p>
      <button onClick={() => setBool(true)}>Toggle</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button
        onClick={() =>
          setBoolOrNum((c) => {
            if (typeof c === 'number') {
              return c + 1;
            }
          })
        }
      >
        Increment
      </button>
    </div>
  );
}

// SET DATA TYPE TO ITEM
interface Item {
  id: string;
  name: string;
}
export function Example2() {
  // Recommended add generic type on when initiate state
  const [data, setData] = useState<Item[]>([]);

  // Dont do
  // const parseData = () => {
  //   const newData = data.filter((item: Item) => item.id);
  // };

  return data.map((item, i) => {
    <div>
      Item {i} is {item.id}
    </div>;
  });
}

// FIX DATA TYPE
interface User {
  id: number;
  name: string;
}
function api(): Promise<User> {
  return Promise.resolve({
    id: 1,
    name: 'John',
  });
}

export function Example3() {
  // use union type with null for initial state
  const [data, setData] = useState<User | null>(null);
  useEffect(() => {
    // tip: Javascript Immediately-invoked Function Expressions (IIFE)
    (async function () {
      setData(await api());
    })();
  }, []);
  if (data === null) {
    console.log(data);
    return <div>Loading ...</div>;
  }

  return <div>Name: {data.name}</div>;
}
