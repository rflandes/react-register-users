import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

import { NavBarItem } from './NavBarItem';

const menu = [
    { url: '/', title: 'UPCH Congreso 2025' },
    { url: '/auth/login', title: 'Registro' },
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

export const NavBar = ({ drawerWidth = 240 }) => {

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
                    {menu.map((item) => <NavBarItem key={item.url} {...item} />)}
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
