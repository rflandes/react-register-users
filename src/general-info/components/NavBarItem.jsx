import { NavLink } from 'react-router-dom';
import { IconButton, Typography, useTheme } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';
import { userDisplayView } from '../../helpers';

export const NavBarItem = ({ url, title }) => {
    const theme = useTheme();

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <NavLink
            style={({ isActive }) => ({ color: isActive ? theme.palette.primary.fontcolor : theme.palette.secondary.fontcolor, fontWeight: isActive ? 'bold' : 'normal', })}
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to={url}
        >
            {
                (url.includes('logout')) ?
                    (
                        <IconButton
                            color='inherit'
                            onClick={onLogout}
                            sx={{
                                display: { xs: 'none', lg: 'block' },
                                '&:hover': {
                                    color: 'red', // Color on hover
                                }
                            }}
                        >
                            <Typography variant='h6' noWrap component='div'> {userDisplayView(title)} </Typography>
                            &nbsp;
                            <LogoutOutlined />
                        </IconButton>
                    )
                    :
                    <Typography variant='h6' noWrap component='div' sx={{
                        display: { xs: 'none', lg: 'block' },
                        '&:hover': {
                            color: theme.palette.primary.fontcolor, // Color on hover
                        }
                    }}
                    > {title} </Typography>
            }
        </NavLink>
    )
}
