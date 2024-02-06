import Box from "../../components/box/Box";
import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";
import { StyledContainer, StyledH2 } from "./FavoritePage.styled";

const FavoritePage = () => {
  return (
    <Box>
      <StyledContainer>
        <StyledH2>Favorite quize</StyledH2>
        <CreateQuizLink />
      </StyledContainer>
    </Box>
  );
};

export default FavoritePage;
