import { useEffect, useState } from "react";
import { fetchCategoriesThunk } from "../../redux/quiz/operations";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useLocation } from "react-router-dom";

import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";

import {
  StyledDiscoverHeader,
  StyledEmptyText,
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

  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>(
    param ? param : "adults"
  );
  const [pageParam, setPageParam] = useState<number>(1);
  const [sizeParam, setSizeParam] = useState<number>(8);
  const [selectedRating, setSelectedRating] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedAgeGroupCat, setSelectedAgeGroupCat] = useState<string>("");
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const userId = useAppSelector((state) => state.auth.user.id); // Предполагаем, что есть стейт auth с данными пользователя
  const userQuizzes = useAppSelector((state) => state.quizes.userQuizzes); 
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCreateQuiz = () => {
    history.push('/create-quiz'); // Перенаправление на страницу создания викторины
  };

  

  const [query, setQuery] = useState({
    ageGroup: selectedAgeGroup,
    page: pageParam,
    pageSize: sizeParam,
    rating: selectedRating,
    inputText: searchTerm,
    title: selectedAgeGroupCat,
  });

  useEffect(() => {
    const newQuery = {
      ...query,
      pageSize: sizeParam,
    };

    dispatch(fetchCategoriesThunk(newQuery));
  }, [dispatch, query, sizeParam]);

  const handleFilter = () => {
    const newQuery = {
      ...query,
      ageGroup: selectedAgeGroup,
      page: pageParam,
      rating: selectedRating,

      inputText: searchTerm,
      title: selectedAgeGroupCat,
    };
    setQuery(newQuery);
    setPageParam(1);
    setSizeParam(8);
    setSelectedAgeGroupCat("");
    setIsCategoryListOpen(false);
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
      <StyledDiscoverHeader>
        <StyledH2>My quiz</StyledH2>
        <CreateQuizLink />
      </StyledDiscoverHeader>
     
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
        {quizes.length > 0 ? (
          quizes.map((quiz) => (
            <QuizListItem
              key={quiz._id}
              id={quiz._id}
              theme={quiz.theme}
              rating={quiz.rating}
              ageGroup={quiz.ageGroup}
              finished={quiz.finished}
            />
          ))
        ) : (
          <StyledEmptyText>No quizzes found</StyledEmptyText>
        )}
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
