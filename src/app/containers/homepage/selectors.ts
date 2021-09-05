import {createSelector} from "reselect";
import {IRootAppState} from "../../../typings";

const selectHomepage = (state: IRootAppState) => state.homepage;

export const makeSelectTopCars = createSelector(selectHomepage, (homepage) => homepage.topCars);