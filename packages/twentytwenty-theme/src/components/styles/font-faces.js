import { Global, css, connect } from "frontity";
import InterMedium from "../../fonts/inter/Inter-Medium.woff2";
import InterBold from "../../fonts/inter/Inter-Bold.woff2";
import InterSemiBold from "../../fonts/inter/Inter-SemiBold.woff2";
import InterMediumUS from "../../fonts/inter/Inter-Medium-US-ASCII.woff2";
import InterBoldUS from "../../fonts/inter/Inter-Bold-US-ASCII.woff2";
import InterSemiBoldUS from "../../fonts/inter/Inter-SemiBold-US-ASCII.woff2";
import InterMediumLatin from "../../fonts/inter/Inter-Medium-LATIN.woff2";
import InterBoldLatin from "../../fonts/inter/Inter-Bold-LATIN.woff2";
import InterSemiBoldLatin from "../../fonts/inter/Inter-SemiBold-LATIN.woff2";

const fonts = {
  "us-ascii": [InterMediumUS, InterSemiBoldUS, InterBoldUS],
  latin: [InterMediumLatin, InterSemiBoldLatin, InterBoldLatin],
  all: [InterMedium, InterSemiBold, InterBold],
};

const FontFace = ({ state }) => {
  const font = fonts[state.theme.fontSets] || fonts["all"];

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${font[0]}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-display: "swap";
          src: url(${font[1]}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-display: "swap";
          src: url(${font[2]}) format("woff2");
        }

        .snipcart-add-item {
          padding: 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: .2s ease-out;
          transition-property: color,border-color,background-color,box-shadow;
          cursor: pointer;
          color: white;
          background-color: #1a4db3;
        }
        .snipcart-add-item:hover {
          box-shadow: var(--shadow-buttonPrimary-hover,0 10px 4px -8px rgba(0,0,0,.5));
          background-color: #0d59f2;
        }

        .snipcart-checkout {
          padding: 5px;
          cursor: pointer;
          background: none;
        }

        .product-price {
          display: flex;
          align-items: center;
          font-size: 1.5em;
        }

        .SectionContainer {
          display: flex;
          justify-content: center;
        }
      `}
    />
  );
};

export default connect(FontFace);
