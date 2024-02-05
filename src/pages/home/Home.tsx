import Quizes from "../../components/quizes/Quizes";
import Block from "../../components/block";
import Box from "../../components/box/Box";
import Stats from "../../components/stats/Stats";

const Home = () => {
  return (
    <>
      <Box>
        <Quizes />
        <Block />
      </Box>
      <Stats />
    </>
  );
};

export default Home;
