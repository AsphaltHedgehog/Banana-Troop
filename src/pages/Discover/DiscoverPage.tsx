import { useEffect, useState } from "react";

import { fetchCategoriesThunk } from "../../redux/quiz/operations";
import { QuizBody } from "../../redux/quiz/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";

import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";
import {
  StyledBtnFilter,
  StyledBtnStars,
  StyledBtnTitle,
  StyledDiscoverHeader,
  StyledFilterWrap,
  StyledInput,
  StyledInputSearch,
  StyledLabel,
  StyledLoadMore,
  StyledRaitingResultWrap,
  StyledRaitingWrap,
  StyledRaitingWrapStar,
  StyledSelectAge,
  StyledTitleWrap,
  StyledTitleWrapForm,
  StyledUlCards,
} from "./DiscoverPage.styled";
import { StyledRatingSvg } from "../../shared/quizlistitem/QuizListItem.styled";
import sprite from "../../images/icons/sprite.svg";

import Box from "../../components/box/Box";
import { StyledH2 } from "../../components/quizes/Quizes.styled";

const DiscoverPage = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector(
    (state) => state.quizes.listCategory.data.category
  );
  const quizes = useAppSelector(
    (state) => state.quizes.listCategory.data.result
  );
  const total = useAppSelector((state) => state.quizes.listCategory.data.total);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredQuizes, setFilteredQuizes] = useState<QuizBody[] | []>([]);
  const [selectedRating, setSelectedRating] = useState<number>(5);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("adults");
  const [selectCatID, setSelectCatID] = useState<string>("");
  const [filterClicked, setFilterClicked] = useState<boolean>(false);
  const [selectedAgeGroupCat, setSelectedAgeGroupCat] =
    useState<string>("adults");
  const [attemptedFilter, setAttemptedFilter] = useState<boolean>(false);
  const [pageParam, SetPageParam] = useState<number>(1);
  const [sizeParam, SetSizeParam] = useState<number>(8);
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);

  // При натисканні на кнопку, змінюємо значення стану
  const toggleCategoryList = () => {
    setIsCategoryListOpen((prevState) => !prevState);
  };
  // console.log(setAttemptedFilter);
  // console.log(setFilteredQuizes);
  const [query, setQuery] = useState({
    ageGroup: selectedAgeGroup,
    page: pageParam,
    pageSize: sizeParam,
    // rating: selectedRating,
    // finished: 5,
    inputText: searchTerm,
    // title: selectedAgeGroupCat,
  });

  // useEffect(() => {
  //   dispatch(fetchCategoriesThunk(query));
  // }, [dispatch, query]);

  useEffect(() => {
    if (filterClicked) {
      const newQuery = {
        ...query,
        // page: pageParam,
        pageSize: sizeParam,
        ageGroup: selectedAgeGroup,
        title: selectCatID,
        rating: selectedRating,
        // inputText: searchTerm,
      };

      dispatch(fetchCategoriesThunk(newQuery));
    } else {
      const newQuery = {
        ...query,

        pageSize: sizeParam,
      };

      dispatch(fetchCategoriesThunk(newQuery));
      console.log(newQuery);
    }
    console.log(sizeParam);
  }, [
    dispatch,
    filterClicked,
    pageParam,
    query,
    // searchTerm,
    selectCatID,
    selectedAgeGroup,
    selectedRating,
    sizeParam,
  ]);

  // useEffect(() => {
  //   // Фільтруємо quizes за вибраним рейтингом
  //   const filteredQuizes = quizes.filter(
  //     (quiz) =>
  //       quiz.rating >= selectedRating && quiz.rating < selectedRating + 1
  //   );
  //   // Встановлюємо відфільтровані quizes у стан filteredQuizes
  //   setFilteredQuizes(filteredQuizes);
  // }, [selectedRating, quizes]);

  const handleFilter = () => {
    SetPageParam(1);
    SetSizeParam(8);
    const newQuery = {
      ...query,
      title: "",
      // ageGroup: selectedAgeGroup,
      // rating: selectedRating,
      page: 1, // Скидаємо сторінку на першу при застосуванні фільтра
    };
    setQuery(newQuery);
    setIsCategoryListOpen(false);
    setFilterClicked(true);
  };

  const handleRatingSelect = (minRating: number, maxRating: number) => {
    console.log(maxRating);
    setSelectedRating(minRating);
    setAttemptedFilter(true); // Включити фільтрацію
    setFilteredQuizes(
      quizes.filter(
        (quiz) => quiz.rating >= minRating && quiz.rating < maxRating
      )
    );
  };
  const handleAgeGroupSelect = (ageGroup: string) => {
    setSelectedAgeGroup(ageGroup);
    setFilterClicked(false);
    // setSelectedRating(1);
  };
  const handleAgeGroupSelectCat = (title: string) => {
    setSelectedAgeGroupCat(title);
    // console.log(title);
    // setSelectedRating(1);
  };
  const HandleId = (id: string) => {
    setSelectCatID(id);
    setFilterClicked(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      handleFilter();
    }
  };
  const handleLoadMore = () => {
    SetSizeParam((prev) => prev + 8);
    // console.log(object);
  };

  return (
    <Box>
      <StyledDiscoverHeader>
        <StyledH2>Discover</StyledH2>
        <CreateQuizLink />
      </StyledDiscoverHeader>
      <StyledFilterWrap>
        <label>
          <StyledInputSearch
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </label>
        <StyledBtnFilter onClick={handleFilter}>Filter</StyledBtnFilter>
        <StyledSelectAge
          value={selectedAgeGroup}
          onChange={(e) => handleAgeGroupSelect(e.target.value)}
        >
          <option value="children">For children</option>
          <option value="adults">For adults</option>
        </StyledSelectAge>

        <StyledTitleWrapForm>
          {/* Кнопка для відкриття/закриття списку */}
          <StyledBtnTitle onClick={toggleCategoryList}>
            {isCategoryListOpen ? "Hide Categories" : "Show Categories"}
          </StyledBtnTitle>

          {/* Список чекбоксів, який відображається тільки при відкритті */}
          {isCategoryListOpen && (
            <StyledTitleWrap $isOpen={isCategoryListOpen}>
              {title.map(
                (category) =>
                  // Додайте умову, щоб відображати категорії тільки для вибраної вікової групи
                  category.ageGroup === selectedAgeGroup && (
                    <StyledLabel key={category._id}>
                      <StyledInput
                        type="checkbox"
                        id={category._id}
                        value={category.title}
                        // Обробник зміни стану, який ви маєте вже реалізувати
                        onChange={(e) => {
                          handleAgeGroupSelectCat(e.target.value);
                          HandleId(e.target.id);
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
        <p>
          Result: <span>{quizes.length} </span>(For: {selectedAgeGroup}, theme:
          {selectedAgeGroupCat})
        </p>
        <StyledRaitingWrap>
          <p>Specify the desired rating:</p>
          <StyledRaitingWrapStar>
            <StyledBtnStars onClick={() => handleRatingSelect(0, 1.9)}>
              <StyledRatingSvg
                sprite={sprite}
                id={`icon-rating`}
                width={24}
                height={24}
                fillOpacity={0.08}
              />
            </StyledBtnStars>
            <StyledBtnStars onClick={() => handleRatingSelect(0, 2.9)}>
              <StyledRatingSvg
                sprite={sprite}
                id={`icon-rating`}
                width={24}
                height={24}
                fillOpacity={0.08}
              />
            </StyledBtnStars>
            <StyledBtnStars onClick={() => handleRatingSelect(0, 3.9)}>
              <StyledRatingSvg
                sprite={sprite}
                id={`icon-rating`}
                width={24}
                height={24}
                fillOpacity={0.08}
              />
            </StyledBtnStars>
            <StyledBtnStars onClick={() => handleRatingSelect(0, 4.9)}>
              <StyledRatingSvg
                sprite={sprite}
                id={`icon-rating`}
                width={24}
                height={24}
                fillOpacity={0.08}
              />
            </StyledBtnStars>
            <StyledBtnStars onClick={() => handleRatingSelect(0, 5)}>
              <StyledRatingSvg
                sprite={sprite}
                id={`icon-rating`}
                width={24}
                height={24}
                fillOpacity={0.08}
              />
            </StyledBtnStars>
          </StyledRaitingWrapStar>
        </StyledRaitingWrap>
      </StyledRaitingResultWrap>

      <StyledUlCards>
        {/* {attemptedFilter && filteredQuizes.length === 0 ? (
          <p>No quizzes found</p>
        ) : filteredQuizes.length > 0 ? (
          filteredQuizes?.map((quiz) => (
            <QuizListItem
              key={quiz._id}
              id={quiz._id}
              theme={quiz.theme}
              rating={quiz.rating}
              ageGroup={quiz.ageGroup}
              finished={quiz.finished}
            />
          ))
        ) : ( */}
        {quizes?.map((quiz) => (
          <QuizListItem
            key={quiz._id}
            id={quiz._id}
            theme={quiz.theme}
            rating={quiz.rating}
            ageGroup={quiz.ageGroup}
            finished={quiz.finished}
          />
        ))}
        {/* )} */}
      </StyledUlCards>
      <div>
        {quizes.length < total && (
          <StyledLoadMore onClick={handleLoadMore}>Load More</StyledLoadMore>
        )}
      </div>
    </Box>
  );
};

export default DiscoverPage;
