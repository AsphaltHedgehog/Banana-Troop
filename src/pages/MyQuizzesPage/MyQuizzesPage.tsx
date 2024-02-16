import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useLocation } from "react-router-dom";

import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";

import {
  StyledMyQuizHeader,
 
  StyledInputSearch,

  StyledLoadMore,
  StyledUlCards,
} from "./MyQuizzesPage.styled";

import sprite from "../../images/icons/sprite.svg";
import Box from "../../components/box/Box";
import { StyledH2 } from "../../components/quizes/Quizes.styled";
import Svg from "../../shared/svg";

const MyQuizzesPage = () => {
  const location = useLocation();
  const param = location.search?.substring(1);
  const dispatch = useAppDispatch();

  const title = useAppSelector(
    (state) => state.quizes.listCategory.data.category
  );
  const quizes = useAppSelector(
    (state) => state.quizes.listCategory.data.result
  );
  const total = useAppSelector((state) => state.quizes.listCategory.data.total);

 
  const [pageParam, setPageParam] = useState<number>(1);
  const [sizeParam, setSizeParam] = useState<number>(8);
 
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedAgeGroupCat, setSelectedAgeGroupCat] = useState<string>("");
  

  

  const [query, setQuery] = useState({

    page: pageParam,
    pageSize: sizeParam,
   
    inputText: searchTerm,
    title: selectedAgeGroupCat,
  });

  ;

   

  const handleFilter = () => {
    const newQuery = {
      ...query,
    
      page: pageParam,
     

      inputText: searchTerm,
      title: selectedAgeGroupCat,
    };
    setQuery(newQuery);
    setPageParam(1);
    setSizeParam(8);
    setSelectedAgeGroupCat("");
   
  };

 


 
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      handleFilter();
    }
  };

  const handleLoadMore = () => {
    setSizeParam((prev) => prev + 8);
  };

  return (
    <Box>
      <StyledMyQuizHeader>
        <StyledH2>My quiz</StyledH2>
        <CreateQuizLink />
      </StyledMyQuizHeader>
     
        <label>
          <div style={{ position: "relative" }}>
            <Svg
              sprite={sprite}
              id={"icon-search"}
              width={14}
              height={14}
              style={{
                position: "absolute",
                left: 18,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <StyledInputSearch
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </label>
      <StyledUlCards>
       
      </StyledUlCards>
      <div>
        {quizes.length < total[0]?.count && quizes.length > 7 && (
          <StyledLoadMore onClick={handleLoadMore}>Load More</StyledLoadMore>
        )}
      </div>
    </Box>
  );
};

export default MyQuizzesPage;
