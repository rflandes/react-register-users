import { NavLink } from 'react-router-dom';
import { Typography, useTheme } from '@mui/material';

export const NavBarItem = ({ url, title }) => {
    const theme = useTheme();
    return (

        <NavLink
            style={({ isActive }) => ({ color: isActive ? theme.palette.primary.fontcolor : theme.palette.secondary.fontcolor, fontWeight: isActive ? 'bold' : 'normal', })}
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to={url}
        >
            <Typography variant='h6' noWrap component='div' sx={{ display: { xs: 'none', lg: 'block' } }}> {title} </Typography>

        </NavLink>
    )
}
