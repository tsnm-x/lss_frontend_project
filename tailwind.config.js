module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./components/shared/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
               
            },
            maxWidth: {
                
            },
            colors: {
                'card-&-content-box': "#241E2C",
                "user-color": '#D14631',
                'buttons-gray': '#3E3847',
                'grayed-text': '#AAA0A8',
                'accent-color-2': '#5D7CF6',
                'background': '#140A22',
                'light-text': '#FFFAFF'
            },
            fontSize: {
                "30px": '30px',
                "25px": '25px',
                '15px': '15px',
                '80px': '80px',
                '24px': '24px',
                '20px': '20px',
                '10px': '10px'
            },
            fontFamily: {
                'gotham': 'Gotham',
                'NEDGEN': 'NEDGEN',
                'SF Pro Text': 'SF Pro Text'
            },
            borderRadius: {
                "5px": "5px",
                "7px": "7px",
                "8px": "8px"
            },
            borderWidth: {
                DEFAULT: "1px",
            },
        },
    },
    plugins: [],
};
