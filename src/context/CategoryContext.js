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
        "This is based on performance as recorded or exhibited by all past political office holders from 1998 - Till date",
      title: "Reward for good service award",
      picture: images.reward,
      id: 3,
    },
    // {
    //   description:
    //     "The third category is for all persons Dead or Alive who by their office, lives or influence had greatly touched lives, improved our society and enhanced the strength of our democracy.",
    //   title: "Role models of democracy awards",
    //   picture: images.democracy,
    //   id: 3,
    // },
    {
      description:
        "This is based on the level of professionalism and service delivered to the people by certain agencies of government.",
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


  const data2 = [
    {
      description:`Strategic branding at the event venue. Media walls, banners at vantage points. \n 1/4-page company profile inserted in the event brochure of 2700 copies to VVIP. \n 30 Seconds advert to run at the screen at the beginning and at the end of award presentation. \n 1 company representative to be treated and honored as a Special guest at the event. \n Choice drinks and food provision for table.`,
      title: "SILVER CATEGORY",
      picture: images.silver,
      price: '3 Million Naira',
      id: 1,
    },
    {
      description:
        "Strategic branding at the event venue. Media walls, banners at vantage points, entrance, screens, signage. \nFull-page company profiles inserted in the event brochure of 2700 copies to VVIP. \n 30 Seconds advert to run at the screen at the beginning, during, and at the end of award presentation. \n 2 company representatives to be treated and honored as Special guests at the event. \n Choice drinks and food provision for a table.",
      title: "GOLD CATEGORY",
      picture: images.gold,
      price: '5 Million Naira',
      id: 2,
    },
    {
      description:
        "Company property /advert will be placed on our website with a link directing traffic to your home page. We will also post your products on all our social media platforms (Facebook, Instagram, Twitter, etc.). \n You will have the opportunity to brand the venue of the event. \n Your company logo will appear on all our promotional Billboards, T-shirts, Flyers, etc. \n Your representatives to be on the ground on our Interviews across the country to have a chat with the press. \n You will have the opportunity to take pictures with Award recipients of your choice. \n Full-page colored company profile inserted in the event brochure of 2700 copies to VVIP. \n 45 seconds advert to run on-screen at the beginning, during, and at the end of the award presentation. \n 5 Company representatives to be treated and honored as Special guests at the event \n Choice drinks and food provision for a table. \n You will be mentioned on Radio and Television, Newspapers and on all our media promos and adverts.",
      title: "DIAMOND CATEGORY",
      picture: images.diamond,
      price: '10 Million Naira',
      id: 3,
    },
    // {
    //   description:
    //     "This is based on transparency, Accountability, integrity and leadership abilities of all serving political office holders in this dispensation.",
    //   title: "Service to the people",
    //   picture: images.service,
    //   id: 4,
    // },
    // {
    //   description: "The award is meant for very outstanding individuals",
    //   title: "Special recognition Awards",
    //   picture: images.recognition,
    //   id: 5,
    // },
  ];

  const [categoryState, setCategoryState] = useState(data);
  const [sponsorsState, setSponsorsState] = useState(data2);
  const [voteModalDisplay, setVoteModalDisplay] = useState(false);
  const [sponsorsModalDisplay, setSponsorsModalDisplay] = useState(false);

  const value = {
    categoryState,
    setCategoryState,
    sponsorsState,
    setSponsorsState,
    voteModalDisplay,
    setVoteModalDisplay,
    sponsorsModalDisplay,
    setSponsorsModalDisplay,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
