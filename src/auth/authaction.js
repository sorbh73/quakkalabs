import { LOGIN_SUCCESS, LOGOUT ,GET_STATE} from "./type";
import AuthService from "./authService";
export const login = (userr) => (dispatch) => {
  return AuthService.logIn(userr).then(
    (response) => {
      if (response.status === "success") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: response.user },
        });
Promise.resolve();
        return response;
      }
    },
    (error) => {
      const message = error.toString();
Promise.reject();
      return message;
    }
  );``
};
export const logout = () => (dispatch) => {
  return AuthService.logOut().then((response) => {
    if (response.status === "success") {
      dispatch({
        type: LOGOUT,
       
      });
      Promise.resolve();
      return response;
    }
  });
};
