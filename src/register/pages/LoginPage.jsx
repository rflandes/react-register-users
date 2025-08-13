import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField } from '@mui/material';


import { AuthLayout } from '../../auth/layout/AuthLayout';
import { useForm } from '../../hooks';
import { startLoginWithEmailPassword, startLogout } from '../../store/auth';

const formData = {
    email: '',
    password: ''
}


export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(startLoginWithEmailPassword({ email, password }));
    }

    const onLogout = () => {
        dispatch(startLogout());
    }


    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>


                    <Grid
                        container
                        display={!!errorMessage ? '' : 'none'}
                        sx={{ mt: 1 }}>
                        <Grid
                            item
                            xs={12}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant='contained'
                                fullWidth>
                                Login
                            </Button>
                        </Grid>
                    </Grid>

                    {/* // TODO: Remove  */}
                    <Grid item xs={12}>
                        <Button
                            disabled={isAuthenticating}
                            variant='contained'
                            fullWidth
                            onClick={onLogout}>
                            SignOut
                        </Button>
                    </Grid>


                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>


            </form>

        </AuthLayout >
    )
}
