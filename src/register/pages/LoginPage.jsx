import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


import { AuthLayout } from '../../auth/layout/AuthLayout';
import { useForm } from '../../hooks';
import { startLoginWithEmailPassword } from '../../store/auth';
import { useEffect } from 'react';

const formData = {
    email: '',
    password: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
}

const contacto = 'soporte@upch.com'

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { email, password,
        isFormValid, emailValid, passwordValid,
        onInputChange } = useForm(formData, formValidations);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    useEffect(() => {
        if (errorMessage?.length > 0) {
            Swal.fire('Error de Login:', 'Usuario o Contraseña inválidos, favor de verificar.', 'error');
        }
    }, [errorMessage]);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        dispatch(startLoginWithEmailPassword({ email, password }));
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
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
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
                                disabled={isAuthenticating || !isFormValid}
                                type="submit"
                                variant='contained'
                                fullWidth>
                                Login
                            </Button>
                        </Grid>
                    </Grid>



                    <Grid container spacing={2} sx={{ mb: 2, mt: 1, marginLeft: '5px' }}>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                            <Link component={RouterLink} color='inherit' to="/">
                                Regresar
                            </Link>

                            <Link component={RouterLink} color='inherit' to="/auth/register">
                                Crear una cuenta
                            </Link>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 5 }}>
                        <Grid container direction='row' justifyContent='end'>
                            Si olvidaste tu contraseña contactar a: <a href={`mailto:${contacto}`}> {contacto}</a>
                        </Grid>
                    </Grid>

                </Grid>


            </form>

        </AuthLayout >
    )
}
