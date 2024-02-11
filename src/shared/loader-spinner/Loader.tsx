import { InfinitySpin } from "react-loader-spinner";
import { StyledWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledWrapper>
      <InfinitySpin width="200" color="#205bf1" />
    </StyledWrapper>
  );
};

export default Loader;
