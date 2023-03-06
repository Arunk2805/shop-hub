import { ADD_USER, CHECK_USER } from "../actions/actionTypes";


const users = [];


const userReducer = (state = users, action) => {
  switch (action.type) {
    case ADD_USER:
    // console.log("added user to state !!!")
    let newUser = [...state]
    newUser.push(action.payload)
    return newUser
    // return [
    //   ...state,
    //   {
    //     ...action.payload
    //   }
    // ]

    case CHECK_USER : 
  

    default:
      return state;
  }
};
export default userReducer;
