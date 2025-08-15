import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks';

import { startLogout } from '../../store/auth';
import { AuthLayout } from '../../auth/layout/AuthLayout';
import { startSaveParticipantForm } from '../../store/register/thunks';
import { clearMessageSaved, setParticipantForm } from '../../store/register/registerSlice';

// let newParticipantForm = {
//     id: '',
//     titulo: '',
//     autor: '',
//     coAutor1: '',
//     coAutor2: '',
//     coAutor3: '',
//     area: '',
//     voucher: ''
// }

const formValidations = {
    titulo: [(value) => value?.length >= 1, 'El título es obligatorio.'],
    autor: [(value) => value?.length >= 1, 'El autor es obligatorio.'],
    area: [(value) => value?.length >= 1, 'El área de investigación es obligatorio.'],
}

export const CheckinPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);

    const { participantForm, messageSaved, isSaving } = useSelector(state => state.register);

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
    } = useForm(participantForm, formValidations);


    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Formulario actualizado', messageSaved, 'success');
            dispatch(clearMessageSaved());
        }
    }, [messageSaved]);

    const onSubmit = (event) => {
        event.preventDefault();

        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(setParticipantForm(formState));

        dispatch(startSaveParticipantForm());

    }

    const onLogout = () => {
        dispatch(startLogout());
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
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="area"
                            type="text"
                            placeholder='area'
                            fullWidth
                            name="area"
                            value={area}
                            onChange={onInputChange}
                            error={!!areaValid && formSubmitted}
                            helperText={areaValid}
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
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
                                disabled={isSaving || !isFormValid}
                                type="submit"
                                variant='contained'
                                fullWidth>
                                Actualizar
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            disabled={isSaving}
                            variant='contained'
                            fullWidth
                            onClick={onLogout}>
                            SignOut
                        </Button>
                    </Grid>

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
