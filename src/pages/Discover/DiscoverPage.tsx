import { useEffect, useState } from "react";

import { fetchCategoriesThunk } from "../../redux/quiz/operations";
import { QuizBody } from "../../redux/quiz/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";

const DiscoverPage = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.quizes.listCategory.categories);
  const quizes = useAppSelector((state) => state.quizes.listCategory.data);
  const total = useAppSelector(
    (state) => state.quizes.listCategory.totalQuizzesCount
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredQuizes, setFilteredQuizes] = useState<QuizBody[] | []>([]);
  const [selectedRating, setSelectedRating] = useState<number>(1);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("adults");
  const [selectedAgeGroupCat, setSelectedAgeGroupCat] = useState<string>("");
  const [attemptedFilter, setAttemptedFilter] = useState<boolean>(false);
  const [pageParam, SetPageParam] = useState<number>(1);
  const [sizeParam, SetSizeParam] = useState<number>(8);
  console.log(setAttemptedFilter);
  console.log(setFilteredQuizes);
  const [query, setQuery] = useState({
    ageGroup: selectedAgeGroup,
    page: pageParam,
    pageSize: sizeParam,
    rating: selectedRating,
    finished: 5,
    inputText: searchTerm,
    title: selectedAgeGroupCat,
  });

  useEffect(() => {
    dispatch(fetchCategoriesThunk(query));
  }, [dispatch, query]);

  const handleFilter = () => {
    SetPageParam(1);
    const newQuery = {
      ...query,
      ageGroup: selectedAgeGroup,
      rating: selectedRating,
      page: 1, // Скидаємо сторінку на першу при застосуванні фільтра
    };
    setQuery(newQuery);
    console.log(searchTerm);
    console.log(selectedAgeGroupCat);
    // console.log(setSearchTerm(e.target.value));
  };

  const handleRatingSelect = (minRating: number, maxRating: number) => {
    console.log(maxRating);
    setSelectedRating(minRating);
  };
  const handleAgeGroupSelect = (ageGroup: string) => {
    setSelectedAgeGroup(ageGroup);
    console.log(ageGroup);
    setSelectedRating(1);
  };
  const handleAgeGroupSelectCat = (title: string) => {
    setSelectedAgeGroupCat(title);
    // console.log(title);
    setSelectedRating(1);
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
    <div>
      <h1>Discover</h1>
      <label>
        Search:
        <input
          type="text"
          placeholder="find your quizz"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button onClick={handleFilter}>Filter</button>
      <select
        value={selectedAgeGroup}
        onChange={(e) => handleAgeGroupSelect(e.target.value)}
      >
        <option value="children">For children</option>
        <option value="adults">For adults</option>
      </select>
      <select
        value={selectedAgeGroupCat}
        onChange={(e) => handleAgeGroupSelectCat(e.target.value)}
      >
        {title.map((category) => (
          <option key={category._id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
      <div>
        <button onClick={() => handleRatingSelect(1, 1.9)}>1</button>
        <button onClick={() => handleRatingSelect(2, 2.9)}>2</button>
        <button onClick={() => handleRatingSelect(3, 3.9)}>3</button>
        <button onClick={() => handleRatingSelect(4, 4.9)}>4</button>
        <button onClick={() => handleRatingSelect(5, 5.9)}>5</button>
      </div>

      <ul>
        {attemptedFilter && filteredQuizes.length === 0
          ? ["No quizzes found"]
          : filteredQuizes.length > 0
          ? filteredQuizes?.map((quiz) => (
              <li key={quiz._id}>
                {quiz.theme}
                <p>{quiz.rating}</p>
                <p>{quiz.ageGroup}</p>
              </li>
            ))
          : quizes?.map((quiz) => (
              // <li key={quiz._id}>
              //   {quiz.theme}
              //   <p>{quiz.rating}</p>
              //   <p>{quiz.ageGroup}</p>
              // </li>
              <QuizListItem
                key={quiz._id}
                theme={quiz.theme}
                rating={quiz.rating}
                ageGroup={quiz.ageGroup}
                finished={quiz.finished}
              />
            ))}
      </ul>

      {quizes.length < total && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default DiscoverPage;
