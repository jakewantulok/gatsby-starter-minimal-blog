import Typography from "typography"

const typography = new Typography({
    googleFonts: [
        {
          name: "Arvo",
          styles: ["400"],
        },
        {
          name: "Fira Sans",
          styles: ["400", "400i", "700", "700i"],
        },
        {
          name: "Fira Code",
          styles: ["400"],
        }
      ],
    baseFontSize: '14px',
    baseLineHeight: 2,
    headerFontFamily: ['Arvo', 'serif'],
    bodyFontFamily: ['Fira Sans', 'sans-serif']
});

export default typography
