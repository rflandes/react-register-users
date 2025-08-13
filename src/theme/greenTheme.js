import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#009282',
            fontcolor: 'white',
        },
        secondary: {
            main: '#02AA92',
            fontcolor: '#C7C7C7',
        },
        error: {
            main: red.A400
        }
    }
})





