module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./components/shared/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                bounce200: "bounce 1s infinite 200ms",
                bounce400: "bounce 1s infinite 400ms",
            },
            maxWidth: {
                "max-container": "1370px",
            },
            colors: {
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
            },
            fontSize: {
                "20px": "20px",
            },
            fontFamily: {
                "gotham-book": "gotham-book",
                "gotham-mid": "gotham-mid",
                "sf-pro": "sf-pro"
            },
            borderRadius: {
                "5px": "5px",
                "7px": "7px",
            },
            borderWidth: {
                DEFAULT: "1px",
            },
        },
    },
    plugins: [],
};
