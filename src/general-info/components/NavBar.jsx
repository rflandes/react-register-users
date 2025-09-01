import { AppBar, Box, Grid, Toolbar } from '@mui/material';

import { NavBarItem } from './NavBarItem';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MenuListComposition } from './MenuListComposition';

const menu = [
    { url: '/objetivo', title: 'Objetivo' },
    { url: '/programa', title: 'Programa' },
    { url: '/formato', title: 'Formato' },
    { url: '/comite', title: 'Comité' },
    { url: '/posters', title: 'Posters Registrados' },
    { url: '/sede', title: 'Sede' },
    { url: '/preguntas', title: 'Preguntas Frecuentes' },
];

export const NavBar = ({ drawerWidth = 240 }) => {

    const { status, displayName } = useSelector(state => state.auth);

    const buildMenu = () => {
        if (status === 'authenticated') {
            return [
                ...menu,
                { url: '/auth/check-in', title: 'Documentación' },
                { url: '/logout', title: displayName }
            ]
        }

        return [
            ...menu,
            { url: '/auth/login', title: 'Registro' }
        ]
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
                <Box sx={{
                    display: { xs: 'block', lg: 'none' }
                }}>
                    <MenuListComposition />
                </Box>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to={'/'}
                    >
                        <img
                            srcSet={`https://www.upchiapas.edu.mx/images/UPlogoblancoN.png`}
                            src={`https://www.upchiapas.edu.mx/images/UPlogoblancoN.png`}
                            width={300}

                            loading="lazy"
                        />

                    </NavLink>

                    {buildMenu().map((item) => <NavBarItem key={item.url} {...item} />)}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
