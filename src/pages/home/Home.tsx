import Quizes from "../../components/quizes/Quizes";
import Block from "../../components/block";
import Box from "../../components/box/Box";
import Stats from "../../components/stats/Stats";
import Hero from "../../components/hero/Hero";
import SectionButton from "../../components/sectionButton/SectionButton";

const Home = () => {
  return (
    <>
      <Box>
        <Hero />
        <SectionButton />
        <Quizes />
        <Block />
      </Box>
      <Stats />
    </>
  );
};

export default Home;
