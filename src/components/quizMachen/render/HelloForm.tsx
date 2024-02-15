import React from 'react';

type RenderHelloFormProps = {
  theme: string;
  name: string;
  setName: (value: string) => void;
  helloFormSubmitHandler: () => void;
  isLoggedIn: boolean
}

const RenderHelloForm: React.FC<RenderHelloFormProps> = ({theme, name, isLoggedIn,setName, helloFormSubmitHandler}) => {
  
  return <>
    <h1>Log in to take the quiz</h1>
    <p>{theme}</p>
    <form onSubmit={helloFormSubmitHandler}>
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