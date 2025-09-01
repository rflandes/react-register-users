import React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { MenuOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';

export const MenuListComposition = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const theme = useTheme();
    const navigate = useNavigate();
    const { status, displayName } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event, url) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
        if (url)
            navigate(url);
    };

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div style={{ marginLeft: -25 }}>
                <Button
                    color='inherit'
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <MenuOutlined />
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                color: 'inherit',
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        style={{
                                            background: theme.palette.secondary.main
                                        }}
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem onClick={(event) => handleClose(event, '/')}>Inicio</MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, '/objetivo')}>Objetivo</MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, '/programa')}>Programa</MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, '/formato')}>Formato</MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, '/comite')}>Comité</MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, '/posters')}>Posters Registrados</MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, '/sede')}>Sede</MenuItem>
                                        <MenuItem onClick={(event) => handleClose(event, '/preguntas')}>Preguntas Frecuentes</MenuItem>
                                        {
                                            (status === 'authenticated')
                                                ?
                                                (<>
                                                    <MenuItem onClick={(event) => handleClose(event, '/auth/check-in')}>Documentación</MenuItem>
                                                    <MenuItem MenuItem onClick={onLogout}>Salir</MenuItem>
                                                </>)
                                                : (<>
                                                    <MenuItem onClick={(event) => handleClose(event, '/auth/login')}>Registro</MenuItem>

                                                </>)
                                        }
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}
