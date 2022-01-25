import { createContext } from "react";

export const initialState = {
    champions: [],
    selectedChampion: {
        id: ""
    }
}

export const StoreContext = createContext();


export const championsReducer = (state, action) => {
    switch (action.type) {
        case 'initChampions':
            const updatedChampions = action.payload;
            return updatedChampions;
        default:
            return state;
    }
}

export const selectedChampionReducer = (state, action) => {
    switch (action.type) {
        case 'updateSelectedChampion':
            const updatedSelectedChampion = action.payload;
            return updatedSelectedChampion;
        default:
            return state;
    }
}

const combineReducers = reducers => {
    return (state = {}, action) => {
        const newState = {}
        for (let key in reducers) {
            console.log("test", reducers[key])
            console.log("test2", state[key])
            newState[key] = reducers[key](state[key], action)
        }
        return newState
    }
}

export const rootReducer = combineReducers({
    champions: championsReducer,
    selectedChampion: selectedChampionReducer
})
