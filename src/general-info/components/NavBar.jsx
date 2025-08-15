import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

import { NavBarItem } from './NavBarItem';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';
import { userDisplayView } from '../../helpers';

const menu = [
    { url: '/', title: 'UPCH Congreso 2025' },
    { url: '/objetivo', title: 'Objetivo' },
    { url: '/programa', title: 'Programa' },
    { url: '/formato', title: 'Formato' },
    { url: '/comite', title: 'Comité' },
    { url: '/posters', title: 'Posters Registrados' },
    { url: '/sede', title: 'Sede' },
    { url: '/preguntas', title: 'Preguntas Frecuentes' },
    { url: '/auth/login', title: 'Registro' },
];

export const NavBar = ({ drawerWidth = 240 }) => {

    const { status, displayName } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ display: { xs: 'block', lg: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    {menu.map((item) => <NavBarItem key={item.url} {...item} />)}

                    {
                        (status === 'authenticated')
                            ?
                            (<>
                                <NavBarItem key={'/auth/check-in'} url='/auth/check-in' title="Documentación" />
                                <IconButton
                                    color='inherit'
                                    onClick={onLogout}
                                >
                                    <Typography variant='h6' noWrap component='div'> {userDisplayView(displayName)} </Typography>
                                    &nbsp;
                                    <LogoutOutlined />
                                </IconButton>
                            </>)
                            : (<>
                                <NavBarItem key={'/auth/login'} url='/auth/login' title="Registro" />
                            </>)
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
