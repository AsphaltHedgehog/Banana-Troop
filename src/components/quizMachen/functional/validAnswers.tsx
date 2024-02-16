const validAnswers = (AnswersArray: { answer: boolean }[]) => {
    let count = 0;
    for (const i of AnswersArray) {
      if (i.answer === true) {
        count += 1;
      }
    }

    return count;
};
  
export default validAnswers;
