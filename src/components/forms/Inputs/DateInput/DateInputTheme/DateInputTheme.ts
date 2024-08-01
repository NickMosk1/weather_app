import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: '1px solid black',
                    padding: 2,
                    marginTop: 1,
                    backgroundColor: '#007bff',
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(120, 120, 120, 0.4)',
                },
            },
        },
    },
});

export default theme;