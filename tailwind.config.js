module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./components/shared/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            smMobile: "360px",
            mobile: "640px",
            smTablet: "768px",
            tablet: "1024px",
            laptop: "1366px",
            smDesktop: "1536px",
            desktop: "1800px",
        },
        container: {
            center: true,
            // screens: {
            //     smMobile: "300px",
            //     smTablet: "648px",
            //     tablet: "884px",
            //     laptop: "1280px",
            //     desktop: "1700px",
            // },
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
                "sm-container": "1216px",
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
                "nav-btn": "#D55460",
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
                "accent-color": "#d55460",
                "accent-color-2": "#5D7CF6",
                "accent-color-3": "#E46956",
                "accent-color-4": "#FC7D47",
                background: "#140A22",
                "footer-bg": "#18112b",
                "text-gray-200": "#9D9D9D",
                winOpacity: "#24213d",
                defeatOpacity: "#301d2e",
                whiteOpacity: "#3a3242",
                red: "#FF4256",
                headBorder: "#282728",
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
                mazin: "mazin",
                inter: "inter",
            },
            borderRadius: {
                // old 1.0
                "5px": "5px",
                "7px": "7px",
                "8px": "8px",
                // new 2.0
                "5px": "5px",
                "23px": "23px",
            },
            borderWidth: {
                // old 1.0
                DEFAULT: "1px",
                "0_3": "0.3px",
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    "@screen smMobile": {
                        maxWidth: "300px",
                    },
                    "@screen mobile": {
                        maxWidth: "600px",
                    },
                    "@screen smTablet": {
                        maxWidth: "650px",
                    },
                    "@screen tablet": {
                        maxWidth: "964px",
                    },
                    "@screen laptop": {
                        maxWidth: "1268px",
                    },
                    "@screen smDesktop": {
                        maxWidth: "1396px",
                    },
                },
            });
        },
    ],
};
