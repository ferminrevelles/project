import { AuthActionLoginTypes } from '../actions/login-page.actions';
export function AuthState() {
    return {
        ids: [],
        entities: {}
    };
}
function arrayToObject(array) {
    return array.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});
}
export function authReducer(state = AuthState(), action) {
    switch (action.type) {
        case AuthActionLoginTypes.LOGIN_SUCCESS:
            return Object.assign(Object.assign({}, state), { entities: arrayToObject(action.payload) });
        /*
            case PokemonActionTypes.ADD_SUCCESS:
              return {
                ...state,
                entities: {
                  ...state.entities,
                  [action.pokemon.id]: action.pokemon
                }
              };
        
            case PokemonActionTypes.DELETE_SUCCESS:
              const entities = { ...state.entities };
              delete entities[action.id];
              return {
                ...state,
                entities
              };
        
            case PokemonActionTypes.UPDATE_SUCCESS:
              return {
                ...state,
                entities: {
                  ...state.entities,
                  [action.pokemon.id]: action.pokemon
                }
              };
        */
        default:
            return state;
    }
}
//# sourceMappingURL=login-page.reducer.js.map