import { createSelector } from "reselect";

const _selectGlobals = (state) => state.globals;

export const selectGlobals = createSelector([_selectGlobals], (_globals) => _globals.globals);
