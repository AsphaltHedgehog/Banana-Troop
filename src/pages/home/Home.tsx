import Block from "../../components/block";
import Box from "../../components/box/Box";
import Stats from "../../components/stats/Stats";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";

const Home = () => {
  return (
    <>
            <QuizListItem />
      <Box>
        <Block />
      </Box>
      <Stats />

    </>
  );
};

export default Home;
