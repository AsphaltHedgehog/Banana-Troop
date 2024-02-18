import { useState, useRef, useEffect } from "react";
import {
  ColorfulSpans,
  RadioContainer,
  CategoryBtn,
  AudienceCategoriesContainer,
  Titles,
  MainContainer,
  ColorContainer,
  Category,
  OptionList,
  OptionBtn,
  OptionItem,
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
  const [OptionListOpen, setOptionListOpen] = useState<boolean>(false);
  const [isChevronRotated, setIsChevronRotated] = useState<boolean>(false);
  const listContainerRef = useRef<HTMLDivElement>(null);

  const [selectedAudience, setSelectedAudience] = useState<string>("adults");

  const [selectedColor, setSelectedColor] = useState<string>("none");

  const [selectedCategory, setSelectedCategory] = useState<string>("Choose");

  const handleChooseBtnClick = () => {
    setOptionListOpen(!OptionListOpen);
    setIsChevronRotated(!isChevronRotated);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      listContainerRef.current &&
      !listContainerRef.current.contains(target) &&
      !target.classList.contains("CreateBtn")
    ) {
      setOptionListOpen(false);
      setIsChevronRotated(false);
    }
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchCategoriesThunk({
      
    }));
  }, [dispatch]);


  const handleAudienceChange = async (
    event: React.ChangeEvent<HTMLInputElement>
    ) => {
    await setSelectedAudience(event.target.value);

    await dispatch(fetchCategoriesThunk({ ageGroup: selectedAudience }));

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
    <MainContainer>
      <AudienceCategoriesContainer>
        <RadioContainer>
          <Titles>Audience</Titles>

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
        <div ref={listContainerRef}>
          <Titles>Categories</Titles>
          <CategoryBtn onClick={handleChooseBtnClick}>
            <Category>{selectedCategory}</Category>
            <Svg
              sprite={sprite}
              id={`chevron-down`}
              width={16}
              height={16}
              style={{
                transform: isChevronRotated ? "rotate(180deg)" : "none",
              }}
            />
          </CategoryBtn>
          {OptionListOpen && (
            <OptionList>
              {selectOptions.categories.map((category) => {
                return (
                  <OptionItem key={category._id}>
                    <OptionBtn
                      type="button"
                      style={{
                        color:
                          selectedCategory === category.title
                            ? "white"
                            : "rgba(244, 244, 244, 0.5)",
                      }}
                      onClick={() => {
                        onHandleClickCategory(category);
                      }}
                    >
                      {category.title}
                    </OptionBtn>
                  </OptionItem>
                );
              })}
            </OptionList>
          )}
        </div>
      </AudienceCategoriesContainer>
      <ColorContainer>
        <Titles>Background</Titles>
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
              value="rgba(255, 255, 255, 0.02)"
              checked={selectedColor === "rgba(255, 255, 255, 0.02)"}
              onChange={handleColorClick}
              aria-label="Dark"
            />
            <span style={{ backgroundColor: "#000000" }}></span>
          </label>
        </ColorfulSpans>
      </ColorContainer>
    </MainContainer>
  );
};

export default QuizOptions;
