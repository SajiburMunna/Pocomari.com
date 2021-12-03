import { actionTypes } from "../../actionTypes";

const initialState = {
  users: [],
};
const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            email: action.payload.email,
            username: action.payload.username,
            password: action.payload.password,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
            address: {
              city: action.payload.city,
              street: action.payload.street,
              number: action.payload.number,
              zipcode: action.payload.zipcode,
              geolocation: {
                lat: action.payload.lat,
                long: action.payload.long,
              },
            },
            phone: action.payload.phone,
          },
        ],
      };
    default:
      return state;
  }
};

export default addUserReducer;
