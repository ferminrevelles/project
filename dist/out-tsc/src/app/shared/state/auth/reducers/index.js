import { createFeatureSelector, createSelector, combineReducers } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromLoginPage from './login-page.reducer';
export const authFeatureKey = 'auth';
/*
export const reducers: ActionReducerMap<State> = {
  //router: routerReducer
};
*/
export function reducers(state, action) {
    return combineReducers({
        [fromAuth.statusFeatureKey]: fromAuth.reducer,
        [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
    })(state, action);
}
export const selectAuthState = createFeatureSelector(authFeatureKey);
export const selectAuthStatusState = createSelector(selectAuthState, state => state.status);
export const selectUser = createSelector(selectAuthStatusState, fromAuth.getUser);
export const selectLoggedIn = createSelector(selectUser, user => !!user);
export const selectLoginPageState = createSelector(selectAuthState, state => state.loginPage);
export const selectLoginPageError = createSelector(selectLoginPageState, fromLoginPage.getError);
export const selectLoginPagePending = createSelector(selectLoginPageState, fromLoginPage.getPending);
//# sourceMappingURL=index.js.map