import { props, createAction } from '@ngrx/store';
export const loginSuccess = createAction('[Auth/API] Login Success', props());
export const loginFailure = createAction('[Auth/API] Login Failure', props());
export const loginRedirect = createAction('[Auth/API] Login Redirect');
//# sourceMappingURL=auth-api.actions.js.map