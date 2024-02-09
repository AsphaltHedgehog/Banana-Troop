import { useState } from "react";
import {
  ColorfulSpans,
  RadioContainer,
  CategoryBtn,
} from "./QuizOptionsStyled";

import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getUpdateOptions } from "../../redux/updateOptions/selectors";
import { addCategory, addBackground } from "../../redux/updateOptions/slice";
import { fetchCategoriesThunk } from "../../redux/updateOptions/operations";

interface ICategory {
  _id: string;
  ageGroup: string;
  title: string;
}

const QuizOptions = () => {
  const dispatch = useAppDispatch();
  const selectOptions = useAppSelector(getUpdateOptions);
  const [isChevronRotated, setIsChevronRotated] = useState<boolean>(false);
  //todo: I threw props the values that will come from the editing object when the editing quiz comes
  //todo: please make them appear in your inputs by default and use the value from editingQuiz.ageGroup by default

  const [selectedAudience, setSelectedAudience] = useState<string>("adults");

  const [selectedColor, setSelectedColor] = useState<string>("none");

  const [selectedCategory, setSelectedCategory] = useState<string>("Choose");

  const handleChooseBtnClick = () => {
    // setCreateListOpen(!isCreateListOpen);
    setIsChevronRotated(!isChevronRotated);
  };

  const handleAudienceChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(fetchCategoriesThunk({ ageGroup: event.target.value }));
    setSelectedAudience(event.target.value);
    setSelectedCategory("Choose");
  };

  const handleColorClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
    dispatch(addBackground(event.target.value));
  };

  const onHandleClickCategory = (category: ICategory) => {
    setSelectedCategory(category.title);
    dispatch(addCategory(category._id));
  };

  return (
    <div>
      <div>
        <RadioContainer>
          <h3>Audience</h3>
          <label>
            <input
              type="radio"
              name="audience"
              value="children"
              checked={selectedAudience === "children"}
              onChange={handleAudienceChange}
            />
            For Children
          </label>

          <label>
            <input
              type="radio"
              name="audience"
              value="adults"
              checked={selectedAudience === "adults"}
              onChange={handleAudienceChange}
            />
            For Adults
          </label>
        </RadioContainer>
        <div>
          {/* Your work here */}
          <h3>Categories</h3>
          <CategoryBtn onClick={handleChooseBtnClick}>
            {selectedCategory}
            <Svg
              sprite={sprite}
              id={`chevron-down`}
              width={16}
              height={16}
              style={{
                transform: isChevronRotated ? "rotate(180deg)" : "none",
              }}
            />
            <ul>
              {selectOptions.categories.map((category) => {
                return (
                  <li key={category._id}>
                    <button
                      type="button"
                      onClick={() => {
                        onHandleClickCategory(category);
                      }}
                    >
                      {category.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </CategoryBtn>
        </div>
      </div>
      <div>
        <h3>Background</h3>
        <ColorfulSpans>
          <label>
            <input
              type="radio"
              name="color"
              value="#43a8d3"
              checked={selectedColor === "#43a8d3"}
              onChange={handleColorClick}
              aria-label="Sky-Blue"
            />
            <span style={{ backgroundColor: "#43a8d3" }}></span>
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="#6636c5"
              checked={selectedColor === "#6636c5"}
              onChange={handleColorClick}
              aria-label="Purple"
            />
            <span style={{ backgroundColor: "#6636c5" }}></span>
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="#e65368"
              checked={selectedColor === "#e65368"}
              onChange={handleColorClick}
              aria-label="Red"
            />
            <span style={{ backgroundColor: "#e65368" }}></span>
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="#000000"
              checked={selectedColor === "#000000"}
              onChange={handleColorClick}
              aria-label="Dark"
            />
            <span style={{ backgroundColor: "#000000" }}></span>
          </label>
        </ColorfulSpans>
      </div>
    </div>
  );
};

export default QuizOptions;
