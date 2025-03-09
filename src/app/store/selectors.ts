import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HousingLocation } from "./models";
import { initialState } from "./reducers";

// export const selectHousingLocations = createFeatureSelector<ReadonlyArray<HousingLocation>>('housingLocations')
export const selectHousingLocations = () => initialState;

// export const slectHousingLocationById = createSelector<HousingLocation>(
//     selectHousingLocations, 
//     (housingLocations, id) => housingLocations.find((hl) => hl.id === id)
// )
