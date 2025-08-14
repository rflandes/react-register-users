import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks';

import { startLogout } from '../../store/auth';
import { AuthLayout } from '../../auth/layout/AuthLayout';
import { startNewParticipantForm } from '../../store/register/thunks';

const formData = {
    titulo: '',
    autor: '',
    coAutor1: '',
    coAutor2: '',
    coAutor3: '',
    area: '',
    voucher: ''
}

const formValidations = {
    titulo: [(value) => value.length >= 1, 'El título es obligatorio.'],
    autor: [(value) => value.length >= 1, 'El autor es obligatorio.'],
    area: [(value) => value.length >= 1, 'El área de investigación es obligatorio.'],
}

export const CheckinPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const {
        formState,
        titulo,
        autor,
        coAutor1,
        coAutor2,
        coAutor3,
        area,
        voucher,
        onInputChange,
        isFormValid,
        tituloValid,
        autorValid,
        areaValid
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        // setFormSubmitted(true);

        if (!isFormValid) return;

        // dispatch(startCreatingUserWithEmailPassword(formState));
        console.log('In progress..')
    }
    const onLogout = () => {
        dispatch(startLogout());
    }

    const onRegisterForm = (event) => {
        event.preventDefault();

        dispatch(startNewParticipantForm());

    }

    return (
        <AuthLayout title="Información y Documentación">

            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Autor"
                            type="text"
                            placeholder='Autor'
                            fullWidth
                            name="autor"
                            value={autor}
                            onChange={onInputChange}
                            error={!!autorValid && formSubmitted}
                            helperText={autorValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="area"
                            type="text"
                            placeholder='area'
                            fullWidth
                            name="autareaor"
                            value={area}
                            onChange={onInputChange}
                            error={!!areaValid && formSubmitted}
                            helperText={areaValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Título"
                            type="text"
                            placeholder='Título'
                            fullWidth
                            name="titulo"
                            value={titulo}
                            onChange={onInputChange}
                            error={!!tituloValid && formSubmitted}
                            helperText={tituloValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Co-Autor1"
                            type="text"
                            placeholder='coAutor1'
                            fullWidth
                            name="coAutor1"
                            value={coAutor1}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="coAutor2"
                            type="text"
                            placeholder='coAutor2'
                            fullWidth
                            name="coAutor2"
                            value={coAutor2}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="coAutor3"
                            type="text"
                            placeholder='coAutor3'
                            fullWidth
                            name="coAutor3"
                            value={coAutor3}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="voucher"
                            type="text"
                            placeholder='voucher id'
                            fullWidth
                            name="voucher"
                            value={voucher}
                            onChange={onInputChange}
                        />
                    </Grid>


                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                disabled={isCheckingAuthentication}
                                type="submit"
                                variant='contained'
                                fullWidth>
                                Actualizar
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            disabled={isCheckingAuthentication}
                            variant='contained'
                            fullWidth
                            onClick={onLogout}>
                            SignOut
                        </Button>
                    </Grid>

                    {/* // TODO: Register new participant
                    <Grid item xs={12}>
                        <Button
                            disabled={isCheckingAuthentication}
                            variant='contained'
                            onClick={onRegisterForm}
                            fullWidth>
                            Register Form
                        </Button>
                    </Grid> */}


                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Todo listo?</Typography>
                        <Link component={RouterLink} color='inherit' to="/">
                            Regresar
                        </Link>
                    </Grid>

                </Grid>


            </form>

        </AuthLayout>
    )
}
