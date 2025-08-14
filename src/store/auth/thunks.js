import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle, logoutFirebase } from '../../firebase/providers';
import { clearNotesLogout } from '../journal';
import { clearParticipantFormLogout } from '../register/registerSlice';
import { checkingCredentials, logout, login } from './';
import { updateRegisterErrorMessage } from '../../store/auth';

export const checkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))

    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if (!result.ok) {
            return dispatch(updateRegisterErrorMessage(result.errorMessage));
        }

        dispatch(login(result))
    }
}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}


export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(clearParticipantFormLogout());
        dispatch(logout());

    }
}

