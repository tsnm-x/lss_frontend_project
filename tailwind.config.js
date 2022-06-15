module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./components/shared/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            mobile: "360px",
            tablet: "768px",
            laptop: "1280px",
            desktop: "1920px",
        },
        container: {
            center: true,
            screens: {
                mobile: "300px",
                tablet: "650px",
                laptop: "1280px",
                desktop: "1700px",
            },
        },
        extend: {
            animation: {
                // old 1.0
                bounce200: "bounce 1s infinite 200ms",
                bounce400: "bounce 1s infinite 400ms",
            },
            maxWidth: {
                // old 1.0
                "max-container": "1370px",
            },
            colors: {
                // old 1.0
                "white-blue": "#198CFF",
                "liquid-white": "#f3f4f8",
                "liquid-white-50": "#F3F4F8F2",
                "liquid-white-100": "#f7f7f9",
                "mix-white-black": "#707070",
                "mix-white-black-100": "#8D919F",
                "mix-white-black-200": "#646e86",
                "full-dark": "#0f121d",
                "nav-text": "#47516C",
                "almost-dark": "#0f121d",
                "red-yellow": "#fc5900",
                "red-yellow-gold": "#FC2300",
                "card-border": "#141726",
                "btn-hover": "#00ccf2",
                // new design 2.0
                "card-&-content-box": "#241E2C",
                "buttons-gray": "#3E3847",
                "grayed-text": "#AAA0A8",
                "light-text": "#FFFAFF",
                "user-color": "#D14631",
                "btn-active": "##F65D68",
                logo: "#FF4656",
                "accent-color-2": "#5D7CF6",
                background: "#140A22",
            },
            fontSize: {
                // old 1.0
                "20px": "20px",
                // new design 2.0
                "30px": "30px",
                "25px": "25px",
                "15px": "15px",
                "80px": "80px",
                "24px": "24px",
                "20px": "20px",
                "10px": "10px",
            },
            fontFamily: {
                // old 1.0
                "gotham-book": "gotham-book",
                "gotham-mid": "gotham-mid",
                // "sf-pro": "sf-pro",
                // new design 2.0
                gotham: "Gotham",
                NEDGEN: "NEDGEN",
                "sf-pro-text": "sf-pro-text",
            },
            borderRadius: {
                // old 1.0
                "5px": "5px",
                "7px": "7px",
                "8px": "8px",
                // new 2.0 
                '5px': '5px'
            },
            borderWidth: {
                // old 1.0
                DEFAULT: "1px",
                "0_3": "0.3px",
            },
        },
    },
    plugins: [],
};
