const PRIMARY_COLOR = '#005792';
const SECONDARY_COLOR = '#00cbc4';


const buttonVariants = {
    primary: {
        color: `${SECONDARY_COLOR}!important`,
        backgroundColor: `${PRIMARY_COLOR}!important`,
        cursor: 'pointer',
        border: 'none'
    },
    transparent: {
        backgroundColor: 'Transparent!important',
        color: `${PRIMARY_COLOR}!important`,
        border: 'none',
        cursor: 'pointer'
    }
};

export default {
    breakpoints: ['600px', '1000px'],
    fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64],
    colors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        sans: 'system-ui, sans-serif',
        mono: 'Menlo, monospace'
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)'
    },
    displays: ['none', 'block', 'flex'],
    buttons: buttonVariants,
};
