// import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
// import { startLogout } from '../../store/auth';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { NavBarItem } from './NavBarItem';


export const NavBar = ({ drawerWidth = 240 }) => {

    // const dispatch = useDispatch();

    const onLogout = () => {
        // dispatch( startLogout() );
        console.log('logging out pending ...');
    }

    const menu = [
        { url: '/', title: 'UPCH Congreso 2025' },
        { url: '/comite', title: 'Comite' },
        { url: '/eventos-anteriores', title: 'Eventos' },
        { url: '/fechas-importantes', title: ' Fechas' },
        { url: '/formato', title: 'Formato' },
        { url: '/hoteles', title: 'Hoteles' },
        { url: '/objetivo', title: 'Objetivo' },
        { url: '/pagos', title: 'Pagos' },
        { url: '/posters', title: 'Posters Registrados' },
        { url: '/preguntas', title: 'Preguntas' },
        { url: '/sede', title: 'Sede' }

    ];

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
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    {menu.map((item) => <NavBarItem {...item} />)}
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
