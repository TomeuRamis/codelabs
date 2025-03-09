import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { HousingLocation } from "./models";
import { housingLocationReducer } from "./reducers";

export const HousingLocationActions = createActionGroup({
    source: 'HousingLocations',
    events: {
        'Load Housing Locations': props<{ housingLocations: ReadonlyArray<HousingLocation>}>(),
        'Add Housing Location': props<{ housingLocation: HousingLocation}>(),
    }
})