import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { HousingLocation } from "./models";

export const HousingLocationActions = createActionGroup({
    source: 'HousingLocaations',
    events: {
        'Load Housing Locations': emptyProps(),
        'Get Housing Location By Id': props<{ housingLocationId: number }>(),
        'Add Housing Location': props<{ housingLocation: HousingLocation}>(),
    }
})