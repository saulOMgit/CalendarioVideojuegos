
import {loadGames} from '../../helpers/loadGames';
import {setJuegos} from "./calendarSlice";

export const startLoadingGames = () => {
    return async( dispatch, getState ) => {
        
        console.log('llego');
        const juegos=await loadGames();
        dispatch(setJuegos());
    }
}