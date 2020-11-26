import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectLoggedUser = createSelector([selectUser], (_user) => _user.user);

export const userErrorMessage = createSelector([selectUser], (_user) => _user.errorMessage);
