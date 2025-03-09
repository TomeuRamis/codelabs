import { createReducer, on } from "@ngrx/store";
import { HousingLocation } from "./models";
import { HousingLocationActions } from "./actions";

export const initialState: ReadonlyArray<HousingLocation> = [];

export const housingLocationReducer = createReducer(
    initialState,
    on(HousingLocationActions.loadHousingLocations, (_state, { housingLocations }) => housingLocations),
    on(HousingLocationActions.addHousingLocation, (state, { housingLocation }) => {
        if (state.find((hl) => hl.id === housingLocation.id)) return state;
        return [...state, housingLocation];
    })
)