import React, { useState } from "react";

interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: "dummy" });
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <div>count:{count}</div>
      <button onClick={(e) => setCount(count === null ? 1 : count + 1)}>
        +1
      </button>
      <div>
        text:
        <input type="text" value={inputData} onChange={handleInputChange} />
        <div>{inputData}</div>
      </div>
    </div>
  );
};

export default TestComponent;
