import { ActionTypes } from "../constants/actionTypes";
const intitialState = {
  articles: [
    {
      id: 1,
      user: "Suruchi",
      title: "Introduction to React",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
      time: "2 min read",
      category: "Programming",
    },
  ],
  //articles:[],
};
// @ts-ignore
export const articleReducer = (state = intitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ARTICLES:
      return state;
    //return {...state, articles:payload}
    default:
      return state;
  }
};
