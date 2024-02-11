import { useState } from "react";


const QuizMachen = (quizId) => {
  const [Name, SetName] = useState('');

  const  SubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h1>Log in to take the quiz</h1>
      <p></p>
      <form onSubmit={SubmitHandler}>
        <input type="text"
          value={Name}
          onChange={e => SetName(e.target.value)}
          placeholder="Name"
        ></input>
        <button type="submit" disabled={!Name}>Start</button>
      </form>
    </>
    
  )
};


export default QuizMachen;