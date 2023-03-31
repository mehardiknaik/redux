import { createSelector } from "reselect";

const user = (state: any) => state.user;

export const userSelector = createSelector(user, (user: any) => user.userData);
