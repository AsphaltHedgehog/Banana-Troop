import BaseQuizList from "../../components/basequizlist/BaseQuizList";
import Block from "../../components/block";
import Box from "../../components/box/Box";
import Stats from "../../components/stats/Stats";

const Home = () => {
  return (
    <>
      <Box>
        <BaseQuizList />
        <Block />
      </Box>
      <Stats />
    </>
  );
};

export default Home;
