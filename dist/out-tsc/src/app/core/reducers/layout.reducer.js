import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '../../core/actions';
import { AuthActions } from '../../shared/state/auth/actions';
export const layoutFeatureKey = 'layout';
const initialState = {
    showSidenav: false,
};
export const reducer = createReducer(initialState, 
// Even thought the `state` is unused, it helps infer the return type
on(LayoutActions.closeSidenav, state => ({ showSidenav: false })), on(LayoutActions.openSidenav, state => ({ showSidenav: true })), on(AuthActions.logoutConfirmation, state => ({ showSidenav: false })));
export const selectShowSidenav = (state) => state.showSidenav;
//# sourceMappingURL=layout.reducer.js.map