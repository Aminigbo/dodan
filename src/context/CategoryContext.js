import React, { useState, useContext, createContext } from "react";
import images from "../images/images";

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

function CategoryContextProvider({ children }) {
  const data = [
    {
      description:
        "This is based on transparency, Accountability, integrity and leadership abilities of all serving political office holders in this dispensation.",
      title: "Legacy Award",
      picture: images.legacy,
      id: 1,
    },
    {
      description:
        "This is based on performance as recorded or exhibited by all past political offfice holders from 1998 - Till date",
      title: "Reward for good service award",
      picture: images.reward,
      id: 2,
    },
    {
      description:
        "The third category is for all persons Dead or Alive who by their office, lives or influence had greatly touched lives, improved our society and enhanced the strength of our democracy.",
      title: "Role models of democracy awards",
      picture: images.democracy,
      id: 3,
    },
    {
      description:
        "This is based on transparency, Accountability, integrity and leadership abilities of all serving political office holders in this dispensation.",
      title: "Service to the people",
      picture: images.service,
      id: 4,
    },
    {
      description: "The award is meant for very outstanding individuals",
      title: "Special recognition Awards",
      picture: images.recognition,
      id: 5,
    },
  ];

  const [categoryState, setCategoryState] = useState(data);
  const [voteModalDisplay, setVoteModalDisplay] = useState(false);

  const value = {
    categoryState,
    setCategoryState,
    voteModalDisplay,
    setVoteModalDisplay,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
