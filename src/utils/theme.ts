import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        common: {
        black: '#000',
        white: '#fff'
        },
        background: {
        paper: '#fff',
        'default': '#fafafa'
        },
        primary: {
        light: 'rgba(92, 92, 92, 1)',
        main: 'rgba(51, 51, 51, 1)',
        dark: 'rgba(12, 12, 12, 1)',
        contrastText: '#fff'
        },
        secondary: {
        light: 'rgba(255, 177, 92, 1)',
        main: 'rgba(243, 128, 45, 1)',
        dark: 'rgba(186, 82, 0, 1)',
        contrastText: '#fff'
        },
        error: {
        light: '#e57373',
        main: 'rgba(255, 0, 0, 1)',
        dark: '#d32f2f',
        contrastText: '#fff'
        },
        text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)'
        }
    }
})

export default responsiveFontSizes(theme);