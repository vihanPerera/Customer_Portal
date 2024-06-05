// mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: '#171719',
                default: '#ffffff'
              },
              secondary: {
                main: '#FF7518',
                default: "#ffffff"
              },
              neutral: {
                main: '#C6C6C6',
                default: '#ffffff'
              },
              background: {
                main: '#171719',
                default: '#1B1B1C'
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: '#ffffff',
              },
              secondary: {
                main: '#FF7518',
                default: "#333333"
              },
              neutral: {
                main: '#7C7B84',
                default: '#ffffff'
              },
              background: {
                main: '#FFFFFF',
                default: '#FFFFFF', 
              },
            }),
      },
      typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };