import React from 'react';
import helloFormSubmitHandler from '../functional/SubmitHandler';

type RenderHelloFormProps = {
  theme: string;
  name: string;
  setName: (value: string) => void;
  isLoggedIn: boolean;
  index: number;
  setIndex: (index: number) => void;
}

const RenderHelloForm: React.FC<RenderHelloFormProps> = ({theme, name, isLoggedIn,setName, index, setIndex}) => {
  
  return <>
    <h1>Log in to take the quiz</h1>
    <p>{theme}</p>
    <form onSubmit={(e) => helloFormSubmitHandler(setIndex, index, e)}>
      <input type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        disabled={isLoggedIn ? true : false}
      ></input>
      <button type="submit" disabled={!name}>Start</button>
    </form>
  </>;
}
  

export default RenderHelloForm