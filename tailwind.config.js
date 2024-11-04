/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        headerBackground: "#212529",
        navButton: "#2082f4",
        navNotification: "#fab100",
        aAmbientalBtn: "#005b41",
        aCidadaoBtn: "#3846d1",
        aContratacaoBtn: "#33513f ",
        aGedGovBtn: "#316191",
        aLegislativoBtn: "#009d4d",
        aSiteGovBtn: "#01698b",
        InstaladorBg: "#f84233",
        footerBg: "#1d1d1b",
      },

      fontFamily: {},
      width: {
        tamBannerPrincipal: "1100px",
      },

      backgroundImage: {
        headerGradient: "linear-gradient(to bottom right, #565656, #2E2E2E)",
      },
    },
  },
  plugins: [],
}

// --font-quick: Quicksand, sans-serif;
// --font-popp: Poppins, sans-serif;
// --font-heeb: Heebo, sans-serif;
