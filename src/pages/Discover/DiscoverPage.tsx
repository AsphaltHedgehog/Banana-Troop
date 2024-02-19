import { useEffect, useState } from "react";
import { fetchCategoriesThunk } from "../../redux/quiz/operations";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useLocation } from "react-router-dom";

import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";

import {
  StyledBtnFilter,
  StyledBtnStars,
  StyledBtnTitle,
  StyledDiscoverHeader,
  StyledEmptyText,
  StyledFilterWrap,
  StyledInput,
  StyledInputSearch,
  StyledLabel,
  StyledLoadMore,
  StyledRaitingResultWrap,
  StyledRaitingWrap,
  StyledRaitingWrapStar,
  StyledSelectAge,
  StyledText,
  StyledTextSpan,
  StyledTextStar,
  StyledTitleWrap,
  StyledTitleWrapForm,
  StyledUlCards,
} from "./DiscoverPage.styled";
import { StyledRatingSvg } from "../../shared/quizlistitem/QuizListItem.styled";
import sprite from "../../images/icons/sprite.svg";
import Box from "../../components/box/Box";
import { StyledH2 } from "../../components/quizes/Quizes.styled";
import Svg from "../../shared/svg";
import { getQuizCategoryTotal } from "../../redux/quiz/selectors";

const DiscoverPage = () => {
  const location = useLocation();
  const param = location.search?.substring(1);
  const dispatch = useAppDispatch();

  const title = useAppSelector(
    (state) => state.quizes.listCategory.data.category
  );
  const quizes = useAppSelector(
    (state) => state.quizes.listCategory.data.result
  );
  const total = useAppSelector(getQuizCategoryTotal);

  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>(
    param ? param : "adults"
  );
  const [pageParam, setPageParam] = useState<number>(1);
  const [sizeParam, setSizeParam] = useState<number>(8);
  const [selectedRating, setSelectedRating] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedAgeGroupCat, setSelectedAgeGroupCat] = useState<string>("");
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);

  const toggleCategoryList = () => {
    setIsCategoryListOpen((prevState) => !prevState);
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

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleAgeGroupSelect = (ageGroup: string) => {
    setSelectedAgeGroup(ageGroup);
  };

  const handleAgeGroupSelectCat = (title: string) => {
    setSelectedAgeGroupCat(title);
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
        <StyledH2>Discover</StyledH2>
        <CreateQuizLink />
      </StyledDiscoverHeader>
      <StyledFilterWrap>
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
        <StyledBtnFilter onClick={handleFilter}>
          <Svg sprite={sprite} id={"icon-filter"} width={14} height={14} />
          Filter
        </StyledBtnFilter>
        <div style={{ position: "relative" }}>
          <StyledSelectAge
            value={selectedAgeGroup}
            onChange={(e) => handleAgeGroupSelect(e.target.value)}
          >
            <option value="children">For children</option>
            <option value="adults">For adults</option>
          </StyledSelectAge>
          <Svg
            sprite={sprite}
            id={"icon-chevron-down"}
            width={14}
            height={14}
            style={{
              position: "absolute",
              right: 18,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <StyledTitleWrapForm>
          <StyledBtnTitle onClick={toggleCategoryList}>
            {isCategoryListOpen ? "Hide Categories" : "Show Categories"}
            <Svg
              sprite={sprite}
              id={"icon-chevron-down"}
              width={14}
              height={14}
            />
          </StyledBtnTitle>

          {isCategoryListOpen && (
            <StyledTitleWrap $isOpen={isCategoryListOpen}>
              {title.map(
                (category) =>
                  category.ageGroup === selectedAgeGroup && (
                    <StyledLabel key={category._id}>
                      <StyledInput
                        type="checkbox"
                        id={category._id}
                        value={category.title}
                        onChange={(e) => {
                          handleAgeGroupSelectCat(e.target.value);
                        }}
                      />
                      {category.title}
                    </StyledLabel>
                  )
              )}
            </StyledTitleWrap>
          )}
        </StyledTitleWrapForm>
      </StyledFilterWrap>
      <StyledRaitingResultWrap>
        <StyledText>
          Result: <StyledTextSpan>{quizes?.length} </StyledTextSpan>(For:{" "}
          {selectedAgeGroup}, theme:
          {selectedAgeGroupCat})
        </StyledText>
        <StyledRaitingWrap>
          <StyledTextStar>Specify the desired rating:</StyledTextStar>
          <StyledRaitingWrapStar>
            {[1, 2, 3, 4, 5].map((index) => (
              <StyledBtnStars
                key={index}
                onClick={() => handleRatingSelect(index)}
              >
                <StyledRatingSvg
                  sprite={sprite}
                  id={`icon-rating`}
                  width={24}
                  height={24}
                  fillOpacity={index <= selectedRating ? 1 : 0.08}
                />
              </StyledBtnStars>
            ))}
          </StyledRaitingWrapStar>
        </StyledRaitingWrap>
      </StyledRaitingResultWrap>

      <StyledUlCards>
        {quizes?.length > 0 ? (
          quizes?.map((quiz) => (
            <QuizListItem
              key={quiz._id}
              id={quiz._id}
              theme={quiz.theme}
              rating={quiz.rating}
              ageGroup={quiz.ageGroup}
              finished={quiz.finished}
              owner={quiz.owner}
            />
          ))
        ) : (
          <StyledEmptyText>No quizzes found</StyledEmptyText>
        )}
      </StyledUlCards>
      <div>
        {quizes?.length < total && quizes?.length > 7 && (
          <StyledLoadMore onClick={handleLoadMore}>Load More</StyledLoadMore>
        )}
      </div>
    </Box>
  );
};

export default DiscoverPage;
